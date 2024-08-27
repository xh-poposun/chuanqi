const fightSubTabList=[
    [[0,1,2],[3,4,5],[6,7,8]],[[9,10,11],[12,13,14],[15,16,17]],[[18,19,20],[21,22,23],[24,25,26]],
    [[27,28,29],[30,31,32],[33,34,35]],[[36,37,38],[39,40,41],[42,43,44]],[[45,46,47],[48,49,50],[51,52,53]],
    [[54,55,56],[57,58,59],[60,61,62]]
]
const monster=[
    {name:"鸡",num:n(1),drop:n(1),dropList:[[10,0,1]]},
    {name:"鸭",num:n(3),drop:n(2),dropList:[[10,0,1]]},
    {name:"鹅",num:n(5),drop:n(3),dropList:[[10,0,1]]},
    {name:"鼠",num:n(10),drop:n(4),dropList:[[10,0,1]]},
    {name:"猫",num:n(15),drop:n(5),dropList:[[10,0,1]]},
    {name:"狗",num:n(20),drop:n(6),dropList:[[10,0,1]]},
    {name:"羊",num:n(25),drop:n(7),dropList:[[10,0,1]]},
    {name:"猪",num:n(30),drop:n(8),dropList:[[10,0,1]]},
    {name:"牛",num:n(50),drop:n(10),dropList:[[10,0,1],[100,1,1]]},
    {name:"小僵尸",num:n(100),drop:n(12),dropList:[[10,2,1],[10,3,1]]},
    {name:"小幽魂",num:n(150),drop:n(15),dropList:[[10,2,1],[10,3,1]]},
    {name:"小骷髅",num:n(200),drop:n(18),dropList:[[10,2,1],[10,3,1]]},
    {name:"中僵尸",num:n(300),drop:n(22),dropList:[[10,2,1],[10,3,1]]},
    {name:"中幽魂",num:n(400),drop:n(26),dropList:[[10,2,1],[10,3,1]]},
    {name:"中骷髅",num:n(500),drop:n(32),dropList:[[10,2,1],[10,3,1]]},
    {name:"大僵尸",num:n(650),drop:n(37),dropList:[[10,2,1],[10,3,1]]},
    {name:"大幽魂",num:n(800),drop:n(45),dropList:[[10,2,1],[10,3,1]]},
    {name:"大骷髅",num:n(1000),drop:n(50),dropList:[[5,2,1],[5,3,1],[100,4,1]]},
    {name:"山贼1",num:n(1200),drop:n(55),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼2",num:n(1500),drop:n(60),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼3",num:n(1700),drop:n(70),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼4",num:n(2000),drop:n(80),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼5",num:n(2500),drop:n(90),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼6",num:n(3000),drop:n(105),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼7",num:n(3500),drop:n(120),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼8",num:n(4000),drop:n(135),dropList:[[10,2,2],[10,3,2]]},
    {name:"山贼9",num:n(5000),drop:n(150),dropList:[[5,2,2],[5,3,2]]},
    {name:"土匪1",num:n(6000),drop:n(165),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪2",num:n(7000),drop:n(180),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪3",num:n(8000),drop:n(195),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪4",num:n(9000),drop:n(210),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪5",num:n(10000),drop:n(225),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪6",num:n(12000),drop:n(240),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪7",num:n(14000),drop:n(255),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪8",num:n(16000),drop:n(270),dropList:[[10,2,3],[10,3,3],[10,5,1]]},
    {name:"土匪9",num:n(20000),drop:n(300),dropList:[[5,2,3],[5,3,3],[10,5,1]]},
    {name:"强盗1",num:n(25000),drop:n(350),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗2",num:n(30000),drop:n(400),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗3",num:n(35000),drop:n(450),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗4",num:n(40000),drop:n(500),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗5",num:n(45000),drop:n(550),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗6",num:n(50000),drop:n(600),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗7",num:n(55000),drop:n(650),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗8",num:n(60000),drop:n(700),dropList:[[10,2,5],[10,3,5]]},
    {name:"强盗9",num:n(80000),drop:n(800),dropList:[[5,2,5],[5,3,5]]},
    {name:"树妖1",num:n(1e5),drop:n(850),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖2",num:n(1.3e5),drop:n(900),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖3",num:n(1.6e5),drop:n(1000),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖4",num:n(2e5),drop:n(1080),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖5",num:n(2.4e5),drop:n(1160),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖6",num:n(2.8e5),drop:n(1220),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖7",num:n(3.2e5),drop:n(1300),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖8",num:n(3.6e5),drop:n(1400),dropList:[[10,2,7],[10,3,7],[30,6,1]]},
    {name:"树妖9",num:n(4e5),drop:n(1500),dropList:[[5,2,7],[5,3,7],[30,6,1],[100,7,1]]},
    {name:"宝箱怪1",num:n(5e5),drop:n(1600),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪2",num:n(6e5),drop:n(1700),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪3",num:n(7e5),drop:n(1800),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪4",num:n(8e5),drop:n(1900),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪5",num:n(9e5),drop:n(2000),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪6",num:n(1e6),drop:n(2100),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪7",num:n(1.15e6),drop:n(2200),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪8",num:n(1.3e6),drop:n(2300),dropList:[[10,2,10],[10,3,10],[30,6,1],[50,8,1]]},
    {name:"宝箱怪9",num:n(1.5e6),drop:n(2500),dropList:[[5,2,10],[5,3,10],[30,6,1],[50,8,1]]},
]