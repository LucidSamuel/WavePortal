
const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const waveContractfactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractfactory.deploy();
    await waveContract.deployed();

    console.log("Waveportal address: ", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }   catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();