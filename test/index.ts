import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumberish } from "ethers";
import { ethers } from "hardhat";
import { ERC20Token, ERC20Token__factory, ERC20NoTransfer, ERC20NoTransfer__factory, Staking, Staking__factory } from "../typechain-types";


describe("Staking", function () {
    let accounts: SignerWithAddress[];
    let owner: SignerWithAddress;
    let tokenMain: ERC20Token;
    let tokenStake: ERC20NoTransfer;
    let tokenReward: ERC20NoTransfer;
    let staking: Staking;
    const MINTER_ROLE = ethers.utils.id("MINTER_ROLE");
    const BURNER_ROLE = ethers.utils.id("BURNER_ROLE");

    before(async function () {
        accounts = await ethers.getSigners();
        owner = accounts[0];
    });

    beforeEach(async function () {
        tokenMain = await getTokenContract(owner, "BGG", "BGG");
        tokenStake = await getNoTransferTokenContract(owner, "SBGG", "SBGG");
        tokenReward = await getNoTransferTokenContract(owner, "EBGG", "EBGG");
        staking = await getStakingContract(owner, tokenMain.address, tokenStake.address, tokenReward.address, ethers.utils.parseEther("100"), 60, (7 * (60 * 60 * 24)));

        await tokenStake.grantRole(MINTER_ROLE, staking.address);
        await tokenStake.grantRole(BURNER_ROLE, staking.address);
        await tokenReward.grantRole(MINTER_ROLE, staking.address);
        await tokenReward.grantRole(BURNER_ROLE, staking.address);
    });

    it("Should stake", async function () {
        const stakeHolderFirstAmount = ethers.utils.parseEther("100");
        const stakeHolderFirstDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks
        const stakeHolderSecondAmount = ethers.utils.parseEther("200");
        const stakeHolderSecondDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks

        // stake holder 1 mint and approve 
        await tokenMain.mint(owner.address, stakeHolderFirstAmount);
        await tokenMain.approve(staking.address, stakeHolderFirstAmount);

        // stake holder 2 mint and approve 
        await tokenMain.mint(accounts[1].address, stakeHolderSecondAmount);
        await tokenMain.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);

        await expect(await staking.stake(stakeHolderFirstAmount, stakeHolderFirstDuration))
            .to.emit(tokenStake, "Transfer")
            .withArgs(ethers.constants.AddressZero, owner.address, ethers.utils.parseEther("138.461538461538461500"));

        await expect(await staking.connect(accounts[1]).stake(stakeHolderSecondAmount, stakeHolderSecondDuration))
            .to.emit(tokenStake, "Transfer")
            .withArgs(ethers.constants.AddressZero, accounts[1].address, ethers.utils.parseEther("276.923076923076923000"));

    });

    it("Should claim rewards", async function () {
        const stakeHolderFirstAmount = ethers.utils.parseEther("100");
        const stakeHolderFirstDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks
        const stakeHolderSecondAmount = ethers.utils.parseEther("200");
        const stakeHolderSecondDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks

        // stake holder 1 mint and approve 
        await tokenMain.mint(owner.address, stakeHolderFirstAmount);
        await tokenMain.approve(staking.address, stakeHolderFirstAmount);

        // stake holder 2 mint and approve 
        await tokenMain.mint(accounts[1].address, stakeHolderSecondAmount);
        await tokenMain.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);

        await staking.stake(stakeHolderFirstAmount, stakeHolderFirstDuration)

        await staking.connect(accounts[1]).stake(stakeHolderSecondAmount, stakeHolderSecondDuration);

        await simulateTimePassed((7 * 10) * (60 * 60 * 24)); // 10 weeks passed
        await expect(await staking.claimRewards())
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, owner.address, ethers.utils.parseEther("333.333333333331864522"));

        await simulateTimePassed((7 * 5) * (60 * 60 * 24)); // 5 weeks passed (15 total)
        await expect(await staking.connect(accounts[1]).claimRewards())
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, accounts[1].address, ethers.utils.parseEther("999.999999999995593568"));

        await simulateTimePassed((7 * 5) * (60 * 60 * 24)); // 5 weeks passed (20 total)
        await expect(await staking.claimRewards())
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, owner.address, ethers.utils.parseEther("333.333333333331864523"));
        await expect(await staking.connect(accounts[1]).claimRewards())
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, accounts[1].address, ethers.utils.parseEther("333.333333333331864523"));

    });

    it("Should unstake", async function () {
        const stakeHolderFirstAmount = ethers.utils.parseEther("100");
        const stakeHolderFirstDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks
        const stakeHolderSecondAmount = ethers.utils.parseEther("200");
        const stakeHolderSecondDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks

        // stake holder 1 mint and approve 
        await tokenMain.mint(owner.address, stakeHolderFirstAmount);
        await tokenMain.approve(staking.address, stakeHolderFirstAmount);

        // stake holder 2 mint and approve 
        await tokenMain.mint(accounts[1].address, stakeHolderSecondAmount);
        await tokenMain.connect(accounts[1]).approve(staking.address, stakeHolderSecondAmount);

        await staking.stake(stakeHolderFirstAmount, stakeHolderFirstDuration)
        await staking.connect(accounts[1]).stake(stakeHolderSecondAmount, stakeHolderSecondDuration);

        await simulateTimePassed((7 * 20) * (60 * 60 * 24)); // 20 weeks passed

        // unstake holder 1
        // approve staking address to burn SBGG tokens
        await tokenStake.approve(staking.address, ethers.utils.parseEther("138.461538461538461500"));
        await expect(await staking.unstake(0))
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, owner.address, ethers.utils.parseEther("666.666666666663729045"))
            .to.emit(tokenStake, "Transfer")
            .withArgs(owner.address, ethers.constants.AddressZero, ethers.utils.parseEther("138.461538461538461500"))
            .to.emit(tokenMain, "Transfer")
            .withArgs(staking.address, owner.address, stakeHolderFirstAmount);

        // unstake holder 2
        // approve staking address to burn SBGG tokens
        await tokenStake.connect(accounts[1]).approve(staking.address, ethers.utils.parseEther("276.923076923076923000"));
        await expect(await staking.connect(accounts[1]).unstake(1))
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, accounts[1].address, ethers.utils.parseEther("1333.333333333327458091"))
            .to.emit(tokenStake, "Transfer")
            .withArgs(accounts[1].address, ethers.constants.AddressZero, ethers.utils.parseEther("276.923076923076923000"))
            .to.emit(tokenMain, "Transfer")
            .withArgs(staking.address, accounts[1].address, stakeHolderSecondAmount);

    });
});




async function getTokenContract(owner: SignerWithAddress, tokenName: string, tokenSymbol: string) {
    const factory = new ERC20Token__factory(owner);
    const contract = await factory.deploy(tokenName, tokenSymbol);
    await contract.deployed();

    return contract;
}

async function getNoTransferTokenContract(owner: SignerWithAddress, tokenName: string, tokenSymbol: string) {
    const factory = new ERC20NoTransfer__factory(owner);
    const contract = await factory.deploy(tokenName, tokenSymbol);
    await contract.deployed();

    return contract;
}

async function getStakingContract(owner: SignerWithAddress, addressTokenMain: string, addressTokenStake: string, addressTokenReward: string, reward: BigNumberish, tokenClaimPeriod: BigNumberish, duration: BigNumberish) {
    const factory = new Staking__factory(owner);
    const contract = await factory.deploy(addressTokenMain, addressTokenStake, addressTokenReward, reward, tokenClaimPeriod, duration);
    await contract.deployed();

    return contract;
}

async function simulateTimePassed(duration: BigNumberish) {
    await ethers.provider.send('evm_increaseTime', [duration]);
}