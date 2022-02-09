import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumberish } from "ethers";
import { ethers } from "hardhat";
import { ERC20Token, ERC20Token__factory, RewardToken, RewardToken__factory, Staking, Staking__factory } from "../typechain-types";


describe("Staking", function () {
    let accounts: SignerWithAddress[];
    let owner: SignerWithAddress;
    let tokenMain: ERC20Token;
    let tokenReward: RewardToken;
    let staking: Staking;
    const MINTER_ROLE = ethers.utils.id("MINTER_ROLE");
    const BURNER_ROLE = ethers.utils.id("BURNER_ROLE");

    before(async function () {
        accounts = await ethers.getSigners();
        owner = accounts[0];
    });

    beforeEach(async function () {
        tokenMain = await getTokenContract(owner, "BGG", "BGG");
        tokenReward = await getRewardTokenContract(owner, "EBGG", "EBGG", tokenMain.address);
        staking = await getStakingContract(owner, tokenMain.address, tokenReward.address, ethers.utils.parseEther("100"), 60, (7 * (60 * 60 * 24)));

        await staking.grantRole(MINTER_ROLE, owner.address);
        await staking.grantRole(BURNER_ROLE, owner.address);
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

        await expect(staking.stake(stakeHolderFirstAmount, (60 * 60 * 24 * 7 * 53))) // 53 weeks is not allowed
            .to.revertedWith("Lock duration incorrect");

        await expect(await staking.stake(stakeHolderFirstAmount, stakeHolderFirstDuration))
            .to.emit(staking, "Transfer")
            .withArgs(ethers.constants.AddressZero, owner.address, ethers.utils.parseEther("138.461538461538461500"));

        await expect(await staking.connect(accounts[1]).stake(stakeHolderSecondAmount, stakeHolderSecondDuration))
            .to.emit(staking, "Transfer")
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

        await staking.stake(stakeHolderFirstAmount.div(2), stakeHolderFirstDuration); //id 0
        expect((await staking.getStakeHolder(owner.address))["stakedWithWeight"])
            .equal(ethers.utils.parseEther("69.230769230769230750"));
        expect((await staking.getStakeInfo(owner.address, 0))["amount"])
            .equal(stakeHolderFirstAmount.div(2));
        expect((await staking.calculateTotalStakedByStakeholder(owner.address)))
            .equal(stakeHolderFirstAmount.div(2));

        await staking.stake(stakeHolderFirstAmount.div(2), stakeHolderFirstDuration); //id 1
        expect((await staking.getStakeHolder(owner.address))["stakedWithWeight"])
            .equal(ethers.utils.parseEther("138.461538461538461500"));
        expect((await staking.getStakeInfo(owner.address, 1))["amount"])
            .equal(stakeHolderFirstAmount.div(2));
        expect((await staking.calculateTotalStakedByStakeholder(owner.address)))
            .equal(stakeHolderFirstAmount);

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

        await expect(staking.unstake(100)) // id 100 does not exist
            .to.revertedWith("Stake is unvalid");

        // unstake holder 1
        await expect(await staking.unstake(0))
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, owner.address, ethers.utils.parseEther("666.666666666663729045"))
            .to.emit(staking, "Transfer")
            .withArgs(owner.address, ethers.constants.AddressZero, ethers.utils.parseEther("138.461538461538461500"))
            .to.emit(tokenMain, "Transfer")
            .withArgs(staking.address, owner.address, stakeHolderFirstAmount);

        // unstake holder 2
        await expect(await staking.connect(accounts[1]).unstake(1))
            .to.emit(tokenReward, "Transfer")
            .withArgs(ethers.constants.AddressZero, accounts[1].address, ethers.utils.parseEther("1333.333333333327458091"))
            .to.emit(staking, "Transfer")
            .withArgs(accounts[1].address, ethers.constants.AddressZero, ethers.utils.parseEther("276.923076923076923000"))
            .to.emit(tokenMain, "Transfer")
            .withArgs(staking.address, accounts[1].address, stakeHolderSecondAmount);

    });

    it("Should update parameters", async function () {
        const reward = ethers.utils.parseEther("200");
        const tokenClaimPeriod = (1 * (60 * 60)); // 1 hour
        const duration = (2 * (60 * 60 * 24)); // 1 days

        await staking.setParameters(reward, tokenClaimPeriod, duration);

        expect(ethers.utils.formatEther(await staking.reward()))
            .equal("200.0");

        expect(await staking.tokenClaimPeriod())
            .equal(tokenClaimPeriod);

        expect(await staking.duration())
            .equal(duration);
    });

    it("Should swap reward token to real token", async function () {
        const stakeHolderFirstAmount = ethers.utils.parseEther("100");
        const stakeHolderFirstAmountToSwap = ethers.utils.parseEther("666.666666666663729045");
        const stakeHolderFirstDuration = (60 * 60 * 24 * 7 * 20); // 20 weeks
        const stakeHolderSecondAmount = ethers.utils.parseEther("200");
        const stakeHolderSecondAmountToSwap = ethers.utils.parseEther("1333.333333333327458091");
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

        await expect(staking.unstake(100)) // id 100 does not exist
            .to.revertedWith("Stake is unvalid");

        // unstake holder 1
        await staking.unstake(0);

        // unstake holder 2
        await staking.connect(accounts[1]).unstake(1);

        await simulateTimePassed((7 * 53) * (60 * 60 * 24)); // 53 weeks passed (more than a year)

        // Mint enough token to reward for swap
        await tokenMain.mint(tokenReward.address, stakeHolderFirstAmountToSwap.add(stakeHolderSecondAmountToSwap));

        await expect(await tokenReward.swap())
            .to.emit(tokenMain, "Transfer")
            .withArgs(tokenReward.address, owner.address, stakeHolderFirstAmountToSwap)
            .to.emit(tokenReward, "Transfer")
            .withArgs(owner.address, ethers.constants.AddressZero, stakeHolderFirstAmountToSwap);

        await expect(await tokenReward.connect(accounts[1]).swap())
            .to.emit(tokenMain, "Transfer")
            .withArgs(tokenReward.address, accounts[1].address, stakeHolderSecondAmountToSwap)
            .to.emit(tokenReward, "Transfer")
            .withArgs(accounts[1].address, ethers.constants.AddressZero, stakeHolderSecondAmountToSwap);

    });
});




async function getTokenContract(owner: SignerWithAddress, tokenName: string, tokenSymbol: string) {
    const factory = new ERC20Token__factory(owner);
    const contract = await factory.deploy(tokenName, tokenSymbol);
    await contract.deployed();

    return contract;
}

async function getRewardTokenContract(owner: SignerWithAddress, tokenName: string, tokenSymbol: string, addressTokenMain: string) {
    const factory = new RewardToken__factory(owner);
    const contract = await factory.deploy(tokenName, tokenSymbol, addressTokenMain);
    await contract.deployed();

    return contract;
}

async function getStakingContract(owner: SignerWithAddress, addressTokenMain: string, addressTokenReward: string, reward: BigNumberish, tokenClaimPeriod: BigNumberish, duration: BigNumberish) {
    const factory = new Staking__factory(owner);
    const contract = await factory.deploy(addressTokenMain, addressTokenReward, reward, tokenClaimPeriod, duration);
    await contract.deployed();

    return contract;
}

async function simulateTimePassed(duration: BigNumberish) {
    await ethers.provider.send('evm_increaseTime', [duration]);
}