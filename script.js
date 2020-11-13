let inputOne
let inputTwo
document.getElementById("myBtn").addEventListener("click", function() {
  inputOne=document.getElementById('input1').value
  inputTwo=document.getElementById('input2').value
  pushCardOne()
  pushCardTwo()

});
function pushCardOne() {
  document.getElementById('body').style.visibility  = 'visible'
  if (inputOne.toLowerCase() == 'charred mallorn mace') {
    malMac = new Weapon(10.5, .68, 1, true, 'CBC', 'charred mallorn mace' )
    console.log(malMac);
    document.getElementById("name1").innerHTML = malMac.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + malMac.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + malMac.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + malMac.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + malMac.kb;
    document.getElementById("price1").innerHTML = 'price: ' + malMac.price;
  }
  if (inputOne.toLowerCase()=='angmar dagger'){
    angDag = new Weapon(4.5, 1.5, .75, false, '1 orc steel ingot', 'angmar dagger')
    console.log(angDag);
    document.getElementById("name1").innerHTML = angDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + angDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + angDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + angDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + angDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + angDag.price;
  }
  if (inputOne.toLowerCase()=='angmar sword'){
    angSrd = new Weapon(7.5, 1, 1, false, '2 orc steel ingots', 'angmar sword')
    console.log(angSrd);
    document.getElementById("name1").innerHTML = angSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + angSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + angSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + angSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + angSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + angSrd.price;
  }
  if (inputOne.toLowerCase()=='angmar battleaxe'){
    angBat = new Weapon(9.5, 0.75, 1, false, '5 orc steel ingots', 'angmar  battleaxe')
    console.log(angBat);
    document.getElementById("name1").innerHTML = angBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + angBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + angBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + angBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + angBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + angBat.price;
  }
  if (inputOne.toLowerCase()=='angmar warhammer'){
    angWar = new Weapon(10.5, .65, 1, true, '4 orc  steel  ingots', 'angmar warhammer')
    console.log(angWar);
    document.getElementById("name1").innerHTML = angWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + angWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + angWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + angWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + angWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + angWar.price;
  }
  if (inputOne.toLowerCase()=='angmar spear'){
    angSpr = new Weapon(6.5, .83, 1.5, false, '1 orc steel ingot', 'angmar spear')
    console.log(angSpr);
    document.getElementById("name1").innerHTML = angSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + angSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + angSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + angSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + angSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + angSpr.price;
  }
  if (inputOne.toLowerCase()=='angmar poleaxe'){
    angPol = new Weapon(7.5, .68, 1.5, false, '3 orc steel ingot', 'angmar poleaxe')
    console.log(angPol);
    document.getElementById("name1").innerHTML = angPol.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + angPol.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + angPol.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + angPol.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + angPol.kb;
    document.getElementById("price1").innerHTML = 'price: ' + angPol.price;
  }
  if (inputOne.toLowerCase()=='arnorian dagger'){
    arnDag = new Weapon(4.5, 1.5, .75, false, 'CBC', 'arnorian dagger')
    console.log(arnDag);
    document.getElementById("name1").innerHTML = arnDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + arnDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + arnDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + arnDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + arnDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + arnDag.price;
  }
  if (inputOne.toLowerCase()=='arnorian sword'){
    arnSrd = new Weapon(7.5, 1, 1, false, 'CBC', 'arnorian sword')
    console.log(arnSrd);
    document.getElementById("name1").innerHTML = arnSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + arnSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + arnSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + arnSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + arnSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + arnSrd.price;
  }
  if (inputOne.toLowerCase()=='arnorian spear'){
    arnSpr = new Weapon(6.5, .83, 1.5, false, 'CBC', 'arnorian spear')
    console.log(arnSpr);
    document.getElementById("name1").innerHTML = arnSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + arnSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + arnSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + arnSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + arnSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + arnSpr.price;
  }
  if (inputOne.toLowerCase()=='black númenórean dagger'){
    bNumDag = new Weapon(4.5, 1.5, 0.75, false, 'CBC', 'black númenórean dagger')
    console.log(bNumDag);
    document.getElementById("name1").innerHTML = bNumDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bNumDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bNumDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bNumDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bNumDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bNumDag.price;
  }
  if (inputOne.toLowerCase()=='black númenórean sword'){
    bNumSrd = new Weapon(7.5, 1, 1, false,  'CBC', 'black númenórean sword')
    console.log(bNumSrd);
    document.getElementById("name1").innerHTML = bNumSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bNumSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bNumSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bNumSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bNumSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bNumSrd.price;
  }
  if (inputOne.toLowerCase()=='black númenórean spear'){
    bNumSpr = new Weapon(6.5, .83, 1.5, false, 'CBC', 'black númenórean spear')
    console.log(bNumSpr);
    document.getElementById("name1").innerHTML = bNumSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bNumSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bNumSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bNumSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bNumSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bNumSpr.price;
  }
  if (inputOne.toLowerCase()=='black númenórean mace'){
    bNumMac = new Weapon(10.5, .65, 1, true, 'CBC', 'black númenórean mace')
    console.log(bNumMac);
    document.getElementById("name1").innerHTML = bNumMac.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bNumMac.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bNumMac.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bNumMac.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bNumMac.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bNumMac.price;
  }
  if (inputOne.toLowerCase()=='black uruk dagger'){
    bUrkDag = new Weapon(5, 1.5, 0.75, false, '1 black uruk steel ingot', 'black uruk dagger')
    console.log(bUrkDag);
    document.getElementById("name1").innerHTML = bUrkDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bUrkDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bUrkDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bUrkDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bUrkDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bUrkDag.price;
  }
  if (inputOne.toLowerCase()=='black uruk cleaver'){
    bUrkClvr = new Weapon(8, 1, 1, false, '2 black uruk steel ingots', 'black uruk cleaver')
    console.log(bUrkClvr);
    document.getElementById("name1").innerHTML = bUrkClvr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bUrkClvr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bUrkClvr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bUrkClvr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bUrkClvr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bUrkClvr.price;
  }
  if (inputOne.toLowerCase()=='black uruk battleaxe'){
    bUrkBat = new Weapon(10, .75, 1, false, '5 black uruk steel ingots', 'black uruk battleaxe')
    console.log(bUrkBat);
    document.getElementById("name1").innerHTML = bUrkBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bUrkBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bUrkBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bUrkBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bUrkBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bUrkBat.price;
  }
  if (inputOne.toLowerCase()=='black uruk spear'){
    bUrkSpr = new Weapon(7, .83, 1.5, false, '1 black uruk steel ingot', 'black uruk spear')
    console.log(bUrkSpr);
    document.getElementById("name1").innerHTML = bUrkSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bUrkSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bUrkSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bUrkSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bUrkSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bUrkSpr.price;
  }
  if (inputOne.toLowerCase()=='black uruk warhammer'){
    bUrkWar = new Weapon(11, .65, 1, true, '4 black uruk steel ingots', 'black uruk warhammer')
    console.log(bUrkWar);
    document.getElementById("name1").innerHTML = bUrkWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bUrkWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bUrkWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bUrkWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bUrkWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bUrkWar.price;
  }
  if (inputOne.toLowerCase()=='blue dwarven dagger'){
    bDwrfDag = new Weapon(5, 1.5, .75, false, '1 blue dwarven ingot', 'blue dwarven dagger')
    console.log(bDwrfDag);
    document.getElementById("name1").innerHTML = bDwrfDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bDwrfDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bDwrfDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bDwrfDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bDwrfDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bDwrfDag.price;
  }
  if (inputOne.toLowerCase()=='blue dwarven sword'){
    bDwrfSrd = new Weapon(8, 1, 1, false, '2 blue dwarven ingots', 'blue dwarven sword')
    console.log(bDwrfSrd);
    document.getElementById("name1").innerHTML = bDwrfSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bDwrfSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bDwrfSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bDwrfSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bDwrfSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bDwrfSrd.price;
  }
  if (inputOne.toLowerCase()=='blue dwarven battleaxe'){
    bDwrfBat = new Weapon(10, .75, 1, false, '5 blue dwarven ingots', 'blue dwarven battleaxe')
    console.log(bDwrfBat);
    document.getElementById("name1").innerHTML = bDwrfBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bDwrfBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bDwrfBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bDwrfBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bDwrfBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bDwrfBat.price;
  }
  if (inputOne.toLowerCase()=='blue dwarven warhammer'){
    bDwrfWar = new Weapon(11, .65, 1, true,  '4 blue dwarven ingots', 'blue dwarven warhammer')
    console.log(bDwrfWar);
    document.getElementById("name1").innerHTML = bDwrfWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bDwrfWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bDwrfWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bDwrfWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bDwrfWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bDwrfWar.price;
  }
  if (inputOne.toLowerCase()=='blue dwarven spear'){
    bDwrfSpr = new Weapon(7, .83, 1.5, false, '1 blue dwarven ingot', 'blue dwarven spear')
    console.log(bDwrfSpr);
    document.getElementById("name1").innerHTML = bDwrfSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bDwrfSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bDwrfSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bDwrfSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bDwrfSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bDwrfSpr.price;
  }
  if (inputOne.toLowerCase()=='blue dwarven pike'){
    bDwrfPk = new Weapon(8, .5, 2, false, '2 blue dwarven ingot', 'blue dwarven pike')
    console.log(bDwrfPk);
    document.getElementById("name1").innerHTML = bDwrfPk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bDwrfPk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bDwrfPk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bDwrfPk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bDwrfPk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bDwrfPk.price;
  }
  if (inputOne.toLowerCase()=='bronze sword'){
    brnzSrd = new Weapon(6.5, 1, 1, false, '2 bronze ingots', 'bronze sword')
    console.log(brnzSrd);
    document.getElementById("name1").innerHTML = brnzSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + brnzSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + brnzSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + brnzSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + brnzSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + brnzSrd.price;
  }
  if (inputOne.toLowerCase()=='bronze dagger'){
    brnzDag = new Weapon(3.5, 1.5, .75, false, '1 bronze ingot', 'bronze dagger')
    console.log(brnzDag);
    document.getElementById("name1").innerHTML = brnzDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + brnzDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + brnzDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + brnzDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + brnzDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + brnzDag.price;
  }
  if (inputOne.toLowerCase()=='bronze spear'){
    brnzSpr = new Weapon(5.5, .83, 1.5, false, '1 bronze ingot', 'bronze spear')
    console.log(brnzSpr);
    document.getElementById("name1").innerHTML = brnzSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + brnzSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + brnzSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + brnzSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + brnzSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + brnzSpr.price;
  }
  if (inputOne.toLowerCase()=='bronze battleaxe'){
    brnzBat = new Weapon(8.5, .75, 1, false, '5 bronze ingots', 'bronze battleaxe')
    console.log(brnzBat);
    document.getElementById("name1").innerHTML = brnzBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + brnzBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + brnzBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + brnzBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + brnzBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + brnzBat.price;
  }
  if (inputOne.toLowerCase()=='corsair dagger'){
    corDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingot', 'corsair dagger')
    console.log(corDag);
    document.getElementById("name1").innerHTML = corDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + corDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + corDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + corDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + corDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + corDag.price;
  }
  if (inputOne.toLowerCase()=='corsair eket'){
    corEkt = new Weapon(7.5, 1, 1, false, '2 iron ingots', 'corsair eket')
    console.log(corEkt);
    document.getElementById("name1").innerHTML = corEkt.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + corEkt.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + corEkt.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + corEkt.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + corEkt.kb;
    document.getElementById("price1").innerHTML = 'price: ' + corEkt.price;
  }
  if (inputOne.toLowerCase()=='corsair harpoon'){
    corHrp = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'corsair harpoon')
    console.log(corHrp);
    document.getElementById("name1").innerHTML = corHrp.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + corHrp.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + corHrp.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + corHrp.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + corHrp.kb;
    document.getElementById("price1").innerHTML = 'price: ' + corHrp.price;
  }
  if (inputOne.toLowerCase()=='corsair battleaxe'){
    corBat = new Weapon(9.5, .75, 1, false, '5 iron ingots', 'corsair battleaxe')
    console.log(corBat);
    document.getElementById("name1").innerHTML = corBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + corBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + corBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + corBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + corBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + corBat.price;
  }
  if (inputOne.toLowerCase()=='dol amroth sword'){
    daSrd = new Weapon(8, 1, 1, false, '2 iron ingots', 'dol amroth sword')
    console.log(daSrd);
    document.getElementById("name1").innerHTML = daSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + daSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + daSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + daSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + daSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + daSrd.price;
  }
  if (inputOne.toLowerCase()=='dol amroth dagger'){
    daDag = new Weapon(5, 1.5, .75, false, '1 iron ingot', 'dol amroth dagger')
    console.log(daDag);
    document.getElementById("name1").innerHTML = daDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + daDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + daDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + daDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + daDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + daDag.price;
  }
  if (inputOne.toLowerCase()=='dol amroth lance'){
    daLan = new Weapon(8, .5, 2, true, '2 iron ingots', 'dol amroth lance')
    console.log(daLan);
    document.getElementById("name1").innerHTML = daLan.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + daLan.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + daLan.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + daLan.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + daLan.kb;
    document.getElementById("price1").innerHTML = 'price: ' + daLan.price;
  }
  if (inputOne.toLowerCase()=='dol amroth longspear'){
    daLspr = new Weapon(8, .5, 2, false, '2 iron ingots', 'dol amroth longspear')
    console.log(daLspr);
    document.getElementById("name1").innerHTML = daLspr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + daLspr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + daLspr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + daLspr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + daLspr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + daLspr.price;
  }
  if (inputOne.toLowerCase()=='dol guldur sword'){
    dgSrd = new Weapon(7.5, 1, 1, false, '2 orc steel ingots', 'dol guldur sword')
    console.log(dgSrd);
    document.getElementById("name1").innerHTML = dgSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dgSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dgSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dgSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dgSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dgSrd.price;
  }
  if (inputOne.toLowerCase()=='dol guldur dagger'){
    dgDag = new Weapon(4.5, 1.5, .75, false, '1 orc steel ingot', 'dol guldur dagger')
    console.log(dgDag);
    document.getElementById("name1").innerHTML = dgDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dgDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dgDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dgDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dgDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dgDag.price;
  }
  if (inputOne.toLowerCase()=='dol guldur battleaxe'){
    dgBat = new Weapon(9.5, .75, 1, false, '5 orc steel ingot', 'dol guldur battleaxe')
    console.log(dgBat);
    document.getElementById("name1").innerHTML = dgBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dgBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dgBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dgBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dgBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dgBat.price;
  }
  if (inputOne.toLowerCase()=='dol guldur warhammer'){
    dgWar = new Weapon(10.5, .65, 1, true, '4 orc steel ingots', 'dol guldur warhammer')
    console.log(dgWar);
    document.getElementById("name1").innerHTML = dgWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dgWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dgWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dgWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dgWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dgWar.price;
  }
  if (inputOne.toLowerCase()=='dol guldur spear'){
    dgSpr = new Weapon(6.5, .83, 1.5, false, '1 orc steel ingot', 'dol guldur spear')
    console.log(dgSpr);
    document.getElementById("name1").innerHTML = dgSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dgSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dgSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dgSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dgSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dgSpr.price;
  }
  if (inputOne.toLowerCase()=='dol guldur spike'){
    dgSpk = new Weapon(7.5, .5, 2, false, '2 orc steel ingot', 'dol guldur spike')
    console.log(dgSpk);
    document.getElementById("name1").innerHTML = dgSpk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dgSpk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dgSpk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dgSpk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dgSpk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dgSpk.price;
  }
  if (inputOne.toLowerCase()=='dorwinion elven dagger'){
    dorElDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'dorwinion elven dagger')
    console.log(dorElDag);
    document.getElementById("name1").innerHTML = dorElDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dorElDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dorElDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dorElDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dorElDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dorElDag.price;
  }
  if (inputOne.toLowerCase()=='dorwinion elven sword'){
    dorElSrd = new Weapon(8, 1, 1, false, '2 elven steel ingot', 'dorwinion elven sword')
    console.log(dorElSrd);
    document.getElementById("name1").innerHTML = dorElSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dorElSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dorElSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dorElSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dorElSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dorElSrd.price;

  }
  if (inputOne.toLowerCase()=='spear of bladorthin'){
    bldSpr = new Weapon(6.5, .83, 1.5, false, '1 dwarven steel ingot', 'spear of bladorthin')
    console.log(bldSpr);
    document.getElementById("name1").innerHTML = bldSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + bldSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + bldSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + bldSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + bldSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + bldSpr.price;
  }
  if (inputOne.toLowerCase()=='dunlending club'){
    dunClb = new Weapon(5, .65, 1, true, '3 planks', 'dunlending club')
    console.log(dunClb);
    document.getElementById("name1").innerHTML = dunClb.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dunClb.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dunClb.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dunClb.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dunClb.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dunClb.price;
  }
  if (inputOne.toLowerCase()=='dunlending trident'){
    dunTri = new Weapon(7, .68, 1.5, false, '3 iron ingots', 'dunlending trident')
    console.log(dunTri);
    document.getElementById("name1").innerHTML = dunTri.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dunTri.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dunTri.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dunTri.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dunTri.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dunTri.price;
  }
  if (inputOne.toLowerCase()=='dwarven dagger'){
    dwrfDag = new Weapon(5, 1.5, .75, false, '1 dwarven steel ingot', 'dwarven dagger')
    console.log(dwrfDag);
    document.getElementById("name1").innerHTML = dwrfDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dwrfDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dwrfDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dwrfDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dwrfDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dwrfDag.price;
  }
  if (inputOne.toLowerCase()=='dwarven sword'){
    dwrfSrd = new Weapon(8, 1, 1, false, '2 dwarven steel ingots', 'dwarven sword')
    console.log(dwrfSrd);
    document.getElementById("name1").innerHTML = dwrfSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dwrfSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dwrfSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dwrfSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dwrfSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dwrfSrd.price;
  }
  if (inputOne.toLowerCase()=='dwarven battleaxe'){
    dwrfBat = new Weapon(10, .75, 1, false, '5 dwarven steel ingots', 'dwarven battleaxe')
    console.log(dwrfBat);
    document.getElementById("name1").innerHTML = dwrfBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dwrfBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dwrfBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dwrfBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dwrfBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dwrfBat.price;
  }
  if (inputOne.toLowerCase()=='dwarven warhammer'){
    dwrfWar = new Weapon(11, .65, 1, true, '4 dwarven steel ingots', 'dwarven warhammer')
    console.log(dwrfWar);
    document.getElementById("name1").innerHTML = dwrfWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dwrfWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dwrfWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dwrfWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dwrfWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dwrfWar.price;
  }
  if (inputOne.toLowerCase()=='dwarven spear'){
    dwrfSpr = new Weapon(7, .83, 1.5,false, '1 dwarven steel ingot', 'dwarven spear')
    console.log(dwrfSpr);
    document.getElementById("name1").innerHTML = dwrfSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dwrfSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dwrfSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dwrfSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dwrfSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dwrfSpr.price;
  }
  if (inputOne.toLowerCase()=='dwarven pike'){
    dwrfPk = new Weapon(8, .5, 2, false, '2 dwarven steel ingots', 'dwarven pike')
    console.log(dwrfPk);
    document.getElementById("name1").innerHTML = dwrfPk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + dwrfPk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + dwrfPk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + dwrfPk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + dwrfPk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + dwrfPk.price;
  }
  if (inputOne.toLowerCase()=='galadhrim dagger'){
    galDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'galadhrim dagger')
    console.log(galDag);
    document.getElementById("name1").innerHTML = galDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + galDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + galDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + galDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + galDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + galDag.price;
  }
  if (inputOne.toLowerCase()=='galadhrim sword'){
    galSrd = new Weapon(8, 1,1, .75, false, '2 elven steel ingots', 'galadhrim sword')
    console.log(galSrd);
    document.getElementById("name1").innerHTML = galSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + galSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + galSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + galSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + galSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + galSrd.price;
  }
  if (inputOne.toLowerCase()=='galadhrim spear'){
    galSpr = new Weapon(7, .83, 1.5, false, '1 elven steel ingot', 'galadhrim spear')
    console.log(galSpr);
    document.getElementById("name1").innerHTML = galSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + galSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + galSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + galSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + galSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + galSpr.price;
  }
  if (inputOne.toLowerCase()=='galadhrim longspear'){
    galLspr = new Weapon(8, .5, 2, false, '2 elven steel ingots', 'galadhrim longspear')
    console.log(galLspr);
    document.getElementById("name1").innerHTML = galLspr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + galLspr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + galLspr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + galLspr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + galLspr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + galLspr.price;
  }
  if (inputOne.toLowerCase()=='galadhrim battlestaff'){
    galBat = new Weapon(8, .68, 1.5, false, '2 elven steel ingots', 'galadhrim battlestaff')
    console.log(galBat);
    document.getElementById("name1").innerHTML = galBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + galBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + galBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + galBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + galBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + galBat.price;
  }
  if (inputOne.toLowerCase()=='gondolinian sword'){
    gndSrd = new Weapon(10, 1, 1, false, 'CBC', 'gondolinian sword')
    console.log(gndSrd);
    document.getElementById("name1").innerHTML = gndSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gndSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gndSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gndSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gndSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gndSrd.price;
  }
  if (inputOne.toLowerCase()=='gondorian sword'){
    gonSrd = new Weapon(7.5, 1, 1, false, '2 iron ingots', 'gondorian sword')
    console.log(gonSrd);
    document.getElementById("name1").innerHTML = gonSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gonSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gonSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gonSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gonSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gonSrd.price;
  }
  if (inputOne.toLowerCase()=='gondorian dagger'){
    gonDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingots', 'gondorian dagger')
    console.log(gonDag);
    document.getElementById("name1").innerHTML = gonDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gonDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gonDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gonDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gonDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gonDag.price;
  }
  if (inputOne.toLowerCase()=='gondorian warhammer'){
    gonWar = new Weapon(10.5, .65, 1, true, '4 iron ingots', 'gondorian warhammer')
    console.log(gonWar);
    document.getElementById("name1").innerHTML = gonWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gonWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gonWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gonWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gonWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gonWar.price;
  }
  if (inputOne.toLowerCase()=='gondorian spear'){
    gonSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'gondorian spear')
    console.log(gonSpr);
    document.getElementById("name1").innerHTML = gonSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gonSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gonSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gonSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gonSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gonSpr.price;
  }
  if (inputOne.toLowerCase()=='gondorian lance'){
    gonLan = new Weapon(7.5, .5, 2, true, '2 iron ingot', 'gondorian lance')
    console.log(gonLan);
    document.getElementById("name1").innerHTML = gonLan.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gonLan.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gonLan.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gonLan.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gonLan.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gonLan.price;
  }
  if (inputOne.toLowerCase()=='gondorian pike'){
    gonPk = new Weapon(7.5, .5, 2, false, '2 iron ingot', 'gondorian pike')
    console.log(gonPk);
    document.getElementById("name1").innerHTML = gonPk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gonPk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gonPk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gonPk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gonPk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gonPk.price;
  }
  if (inputOne.toLowerCase()=='gulfen khopesh'){
    gulKph = new Weapon(7.5, 1, 1, false, '2  bronze ingots', 'gulfen khopesh')
    console.log(gulKph);
    document.getElementById("name1").innerHTML = gulKph.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + gulKph.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + gulKph.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + gulKph.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + gulKph.kb;
    document.getElementById("price1").innerHTML = 'price: ' + gulKph.price;
  }
  if (inputOne.toLowerCase()=='half-troll dagger'){
    htrDag = new Weapon(4.5, 1.5, .75, false, '1 flint', 'half-troll dagger')
    console.log(htrDag);
    document.getElementById("name1").innerHTML = htrDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + htrDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + htrDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + htrDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + htrDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + htrDag.price;
  }
  if (inputOne.toLowerCase()=='half-troll sword'){
    htrSrd = new Weapon(7.5, 1, 1, false, '2 flint', 'half-troll dagger')
    console.log(htrSrd);
    document.getElementById("name1").innerHTML = htrSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + htrSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + htrSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + htrSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + htrSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + htrSrd.price;
  }
  if (inputOne.toLowerCase()=='half-troll pike'){
    htrPk = new Weapon(7.5, .5, 2, false, '2 flint', 'half-troll pike')
    console.log(htrPk);
    document.getElementById("name1").innerHTML = htrPk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + htrPk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + htrPk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + htrPk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + htrPk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + htrPk.price;
  }
  if (inputOne.toLowerCase()=='half-troll warhammer'){
    htrWar = new Weapon(10.5, .65, 1, true, '4 flint', 'half=troll warhammer')
    console.log(htrWar);
    document.getElementById("name1").innerHTML = htrWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + htrWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + htrWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + htrWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + htrWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + htrWar.price;
  }
  if (inputOne.toLowerCase()=='half-troll mace'){
    htrMac = new Weapon(10.5, .65, 1, true, '4 flint', 'half-troll mace')
    console.log(htrMac);
    document.getElementById("name1").innerHTML = htrMac.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + htrMac.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + htrMac.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + htrMac.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + htrMac.kb;
    document.getElementById("price1").innerHTML = 'price: ' + htrMac.price;
  }
  if (inputOne.toLowerCase()=='half-troll battleaxe'){
    htrBat = new Weapon(9.5, .75, 1, false, '5 flint', 'half troll battleaxe')
    console.log(htrBat);
    document.getElementById("name1").innerHTML = htrbat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + htrbat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + htrbat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + htrbat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + htrbat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + htrbat.price;
  }
  if (inputOne.toLowerCase()=='haradic sword'){
    harSrd = new Weapon(7.5, 1, 1, false, '2 bronze ingots', 'haradic sword')
    console.log(harSrd);
    document.getElementById("name1").innerHTML = harSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + harSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + harSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + harSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + harSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + harSrd.price;
  }
  if (inputOne.toLowerCase()=='haradic dagger'){
    harDag = new Weapon(4.5, 1.5, .75, false, '1 bronze ingot', 'haradic dagger')
    console.log(harDag);
    document.getElementById("name1").innerHTML = harDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + harDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + harDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + harDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + harDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + harDag.price;
  }
  if (inputOne.toLowerCase()=='haradic spear'){
    harSpr = new Weapon(6.5, .83, 1.5, false, '1 bronze ingot','haradic spear')
    console.log(harSpr);
    document.getElementById("name1").innerHTML = harSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + harSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + harSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + harSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + harSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + harSpr.price;
  }
  if (inputOne.toLowerCase()=='haradic longspear'){
    harLspr = new Weapon(7.5, .5, 2, false, '2 bronze ingots', 'haradic longspear')
    console.log(harLspr);
    document.getElementById("name1").innerHTML = harLspr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + harLspr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + harLspr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + harLspr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + harLspr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + harLspr.price;
  }
  if (inputOne.toLowerCase()=='blacksmith hammer'){
    blkHam = new Weapon(9.5, .68, 1, true, 'CBC', 'blacksmith hammer')
    console.log(blkHam);
    document.getElementById("name1").innerHTML = blkHam.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + blkHam.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + blkHam.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + blkHam.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + blkHam.kb;
    document.getElementById("price1").innerHTML = 'price: ' + blkHam.price;
  }
  if (inputOne.toLowerCase()=='lindon dagger'){
    linDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'lindon dagger')
    console.log(linDag);
    document.getElementById("name1").innerHTML = linDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + linDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + linDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + linDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + linDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + linDag.price;
  }
  if (inputOne.toLowerCase()=='lindon sword'){
    linSrd = new Weapon(8, 1, 1, false, '2 elven steel ingots', 'lindon sword')
    console.log(linSrd);
    document.getElementById("name1").innerHTML = linSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + linSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + linSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + linSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + linSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + linSrd.price;
  }
  if (inputOne.toLowerCase()=='lindon spear'){
    linSpr = new Weapon(7, .83, 1.5,  false, '1 elven steel ingot', 'lindon spear')
    console.log(linSpr);
    document.getElementById("name1").innerHTML = linSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + linSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + linSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + linSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + linSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + linSpr.price;
  }
  if (inputOne.toLowerCase()=='lindon battlestaff'){
    linBat = new Weapon(8, .65, 1.5, false, '2 elven steel ingots', 'lindon battlestaff')
    console.log(linBat);
    document.getElementById("name1").innerHTML = linBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + linBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + linBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + linBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + linBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + linBat.price;
  }
  if (inputOne.toLowerCase()=='lindon longspear'){
    linLspr = new Weapon(8, .5, 2, false, '2 elven steel ingots')
    console.log(linLspr);
    document.getElementById("name1").innerHTML = linLspr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + linLspr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + linLspr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + linLspr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + linLspr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + linLspr.price;
  }
  if (inputOne.toLowerCase()=='lossarnach battleaxe'){
    lssBat = new Weapon(9, .75, 1, false, '5 iron ingots', 'lossarnach battleaxe')
    console.log(lssBat);
    document.getElementById("name1").innerHTML = lssBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + lssBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + lssBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + lssBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + lssBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + lssBat.price;
  }
  if (inputOne.toLowerCase()=='mallorn sword'){
    malSrd = new Weapon(6.5, 1, 1, false, '2 mallorn planks', 'mallorn sword')
    console.log(malSrd);
    document.getElementById("name1").innerHTML = malSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + malSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + malSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + malSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + malSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + malSrd.price;
  }
  if (inputOne.toLowerCase()=='mithril dagger'){
    mitDag = new Weapon(7, 1.5, .75, false, '1 mithril ingot', 'mithril dagger')
    console.log(motDag);
    document.getElementById("name1").innerHTML = mitDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + mitDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + mitDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + mitDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + mitDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + mitDag.price;
  }
  if (inputOne.toLowerCase()=='mithril sword'){
    mitSrd = new Weapon(10, 1, 1, false,  '2 mithril ingots', 'mithril sword')
    console.log(mitSrd);
    document.getElementById("name1").innerHTML = mitSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + mitSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + mitSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + mitSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + mitSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + mitSrd.price;
  }
  if (inputOne.toLowerCase()=='mithril battleaxe'){
    mitBat = new Weapon(12, .75, 1, false, '5 mithril ingots',  'mithril battleaxe')
    console.log(mitBat);
    document.getElementById("name1").innerHTML = mitBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + mitBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + mitBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + mitBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + mitBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + mitBat.price;
  }
  if (inputOne.toLowerCase()=='mithril warhammer'){
    mitWar = new Weapon(13, .65, 1, true, '4 mithril ingots', 'mithril warhammer')
    console.log(mitWar);
    document.getElementById("name1").innerHTML = mitWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + mitWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + mitWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + mitWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + mitWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + mitWar.price;
  }
  if (inputOne.toLowerCase()=='mithril spear'){
    mitSpr = new Weapon(9, .83, 1.5, false, '1 mithril ingot', 'mithril spear')
    console.log(mitSpr);
    document.getElementById("name1").innerHTML = mitSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + mitSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + mitSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + mitSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + mitSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + mitSpr.price;
  }
  if (inputOne.toLowerCase()=='mithril halberd'){
    mitHal = new Weapon(10, .5, 2, false, '3 mithril ingots','mithril halberd')
    console.log(mitHal);
    document.getElementById("name1").innerHTML = mitHal.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + mitHal.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + mitHal.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + mitHal.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + mitHal.kb;
    document.getElementById("price1").innerHTML = 'price: ' + mitHal.price;
  }
  if (inputOne.toLowerCase()=='mordor dagger'){
    morDag = new Weapon(4.5, 1.5, .75, false, '1 orc steel ingot', 'mordor dagger')
    console.log(morDag);
    document.getElementById("name1").innerHTML = morDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + morDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + morDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + morDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + morDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + morDag.price;
  }
  if (inputOne.toLowerCase()=='mordor scimitar'){
    morScm = new Weapon(7.5, 1, 1, false, '2 orc steel ingots', 'mordor scimitar')
    console.log(morScm);
    document.getElementById("name1").innerHTML = morScm.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + morScm.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + morScm.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + morScm.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + morScm.kb;
    document.getElementById("price1").innerHTML = 'price: ' + morScm.price;
  }
  if (inputOne.toLowerCase()=='mordor spear'){
    morSpr = new Weapon(6.5, .83, 1.5, false, '1 orc steel ingot', 'mordor spear')
    console.log(morSpr);
    document.getElementById("name1").innerHTML = morSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + morSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + morSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + morSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + morSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + morSpr.price;
  }
  if (inputOne.toLowerCase()=='mordor battleaxe'){
    morBat = new Weapon(8.5, .75, 1, false, '5 orc steel ingots', 'mordor battleaxe')
    console.log(morBat);
    document.getElementById("name1").innerHTML = morBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + morBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + morBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + morBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + morBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + morBat.price;
  }
  if (inputOne.toLowerCase()=='mordor warhammer'){
    morWar = new Weapon(9.5, .65, 1, true, '4 orc steel ingots', 'mordor warhammer')
    console.log(morWar);
    document.getElementById("name1").innerHTML = morWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + morWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + morWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + morWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + morWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + morWar.price;
  }
  if (inputOne.toLowerCase()=='mordor warscythe'){
    morWsc = new Weapon(7.5, .68, 1.5, false, '3 orc steel ingots', 'mordor warscythe')
    console.log(morWsc);
    document.getElementById("name1").innerHTML = morWsc.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + morWsc.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + morWsc.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + morWsc.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + morWsc.kb;
    document.getElementById("price1").innerHTML = 'price: ' + morWsc.price;
  }
  if (inputOne.toLowerCase()=='old-haradic sacrificial dagger'){
    ohsd = new Weapon(4.5, 1.5, .75, false, 'CBC', 'old-haradic sacrificial dagger')
    console.log(ohsd);
    document.getElementById("name1").innerHTML = ohsd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + ohsd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + ohsd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + ohsd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + ohsd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + ohsd.price;
  }
  if (inputOne.toLowerCase()=='orc skull staff'){
    oss = new Weapon(6.5, 1, 1, true, '1 skeleton skull', 'orc skull staff')
    console.log(oss);
    document.getElementById("name1").innerHTML = oss.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + oss.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + oss.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + oss.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + oss.kb;
    document.getElementById("price1").innerHTML = 'price: ' + oss.price;
  }
  if (inputOne.toLowerCase()=='pelargir trident'){
    pelTri = new Weapon(7.5, .68, 1.5, false, '3 iron ingots', 'pelargir trident')
    console.log(pelTri);
    document.getElementById("name1").innerHTML = pelTri.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + pelTri.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + pelTri.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + pelTri.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + pelTri.kb;
    document.getElementById("price1").innerHTML = 'price: ' + pelTri.price;
  }
  if (inputOne.toLowerCase()=='pelargir eket'){
    pelEkt = new Weapon(6.5, 1, 1, false, '2 iron ingots', 'pelargir eket')
    console.log(pelEkt);
    document.getElementById("name1").innerHTML = pelEkt.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + pelEkt.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + pelEkt.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + pelEkt.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + pelEkt.kb;
    document.getElementById("price1").innerHTML = 'price: ' + pelEkt.price;
  }
  if (inputOne.toLowerCase()=='utumno dagger'){
    utDag = new Weapon(5.5, 1.5, .75, false, 'CBC', 'utumno dagger')
    console.log(utDag);
    document.getElementById("name1").innerHTML = utDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + utDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + utDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + utDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + utDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + utDag.price;
  }
  if (inputOne.toLowerCase()=='utumno sword'){
    utSrd = new Weapon(8.5, 1, 1, false, 'CBC', 'utumno sword')
    console.log(utSrd);
    document.getElementById("name1").innerHTML = utSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + utSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + utSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + utSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + utSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + utSrd.price;
  }
  if (inputOne.toLowerCase()=='utumno spear'){
    utSpr = new Weapon(7.5, .83, 1.5, false, 'CBC', 'utumno spear')
    console.log(utSpr);
    document.getElementById("name1").innerHTML = utSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + utSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + utSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + utSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + utSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + utSpr.price;
  }
  if (inputOne.toLowerCase()=='utumno battleaxe'){
    utBat = new Weapon(10.5, .75, 1, false, 'CBC', 'utumno battleaxe')
    console.log(utBat);
    document.getElementById("name1").innerHTML = utBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + utBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + utBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + utBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + utBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + utBat.price;
  }
  if (inputOne.toLowerCase()=='utumno warhammer'){
    utWar = new Weapon(11.5, .68, 1, true, 'CBC', 'utumno warhammer')
    console.log(utWar);
    document.getElementById("name1").innerHTML = utWar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + utWar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + utWar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + utWar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + utWar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + utWar.price;
  }
  if (inputOne.toLowerCase()=='rhûnic dagger'){
    rhnDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingot', 'rhûnic dagger')
    console.log(rhnDag);
    document.getElementById("name1").innerHTML = rhnDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhnDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhnDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhnDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhnDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhnDag.price;
  }
  if (inputOne.toLowerCase()=='rhûnic sword'){
    rhnSrd = new Weapon(7.5, 1, 1, false, '2 iron ingot', 'rhûnic sword')
    console.log(rhnSrd);
    document.getElementById("name1").innerHTML = rhnSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhnSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhnSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhnSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhnSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhnSrd.price;
  }
  if (inputOne.toLowerCase()=='rhûnic spear'){
    rhnSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'rhûnic spear')
    console.log(rhnSpr);
    document.getElementById("name1").innerHTML = rhnSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhnSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhnSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhnSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhnSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhnSpr.price;
  }
  if (inputOne.toLowerCase()=='rhûnic bardiche'){
    rhnBar = new Weapon(7.5, .83, 1.5, false, '3 iron ingots', 'rhûnic bardiche')
    console.log(rhnBar);
    document.getElementById("name1").innerHTML = rhnBar.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhnBar.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhnBar.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhnBar.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhnBar.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhnBar.price;
  }
  if (inputOne.toLowerCase()=='rhûnic pike'){
    rhnPk = new Weapon(7.5, .5, 2, false, '2 iron ingots', 'rhûnic pike')
    console.log(rhnPk);
    document.getElementById("name1").innerHTML = rhnPk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhnPk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhnPk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhnPk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhnPk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhnPk.price;
  }
  if (inputOne.toLowerCase()=='rhûnic battleaxe'){
    rhnBat = new Weapon(9.5, .75, 1, false, '5 iron ingots', 'rhûnic battleaxe')
    console.log(rhnBat);
    document.getElementById("name1").innerHTML = rhnBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhnBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhnBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhnBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhnBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhnBat.price;
  }
  if (inputOne.toLowerCase()=='rivendell dagger'){
    rivDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'rivendell dagger')
    console.log(rivDag);
    document.getElementById("name1").innerHTML = rivDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rivDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rivDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rivDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rivDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rivDag.price;
  }
  if (inputOne.toLowerCase()=='rivendell sword'){
    rivSrd = new Weapon(8, 1, 1, false, '2 elven steel ingots', 'rivendell sword')
    console.log(rivSrd);
    document.getElementById("name1").innerHTML = rivSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rivSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rivSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rivSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rivSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rivSrd.price;
  }
  if (inputOne.toLowerCase()=='rivendell spear'){
    rivSpr = new Weapon(7, .83, 1.5,  false, '1 elven steel ingot', 'rivendell spear')
    console.log(rivSpr);
    document.getElementById("name1").innerHTML = rivSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rivSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rivSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rivSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rivSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rivSpr.price;
  }
  if (inputOne.toLowerCase()=='rivendell battlestaff'){
    rivBat = new Weapon(8, .65, 1.5, false, '2 elven steel ingots', 'rivendell battlestaff')
    console.log(rivBat);
    document.getElementById("name1").innerHTML = rivBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rivBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rivBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rivBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rivBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rivBat.price;
  }
  if (inputOne.toLowerCase()=='rivendell longspear'){
    rivLspr = new Weapon(8, .5, 2, false, '2 elven steel ingots')
    console.log(rivLspr);
    document.getElementById("name1").innerHTML = rivLspr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rivLspr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rivLspr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rivLspr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rivLspr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rivLspr.price;
  }
  if (inputOne.toLowerCase()=='rohirric dagger'){
    rhrDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingot', 'rohirric dagger')
    console.log(rhrDag);
    document.getElementById("name1").innerHTML = rhrDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhrDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhrDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhrDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhrDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhrDag.price;
  }
  if (inputOne.toLowerCase()=='rohirric sword'){
    rhrSrd = new Weapon(7.5, 1, 1, false, '2 iron ingots', 'rohirric sword')
    console.log(rhrSrd);
    document.getElementById("name1").innerHTML = rhrSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhrSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhrSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhrSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhrSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhrSrd.price;
  }
  if (inputOne.toLowerCase()=='rohirric spear'){
    rhrSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'rohirric spear')
    console.log(rhrSpr);
    document.getElementById("name1").innerHTML = rhrSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhrSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhrSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhrSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhrSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhrSpr.price;
  }
  if (inputOne.toLowerCase()=='rohirric battleaxe'){
    rhrBat = new Weapon(9.5, .75, 1, false, '5 iron ingots', 'rohirric battleaxe')
    console.log(rhrBat);
    document.getElementById("name1").innerHTML = rhrBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhrBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhrBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhrBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhrBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhrBat.price;
  }
  if (inputOne.toLowerCase()=='rohirric lance'){
    rhrLan = new Weapon(7.5, .5, 2, false, '2 iron  ingots', 'rohirric lance')
    console.log(rhrLan);
    document.getElementById("name1").innerHTML = rhrLan.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rhrLan.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rhrLan.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rhrLan.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rhrLan.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rhrLan.price;
  }
  if (inputOne.toLowerCase()=='rolling pin'){
    rollPn = new Weapon(5, 1, 1, false, '1 plank', 'rolling pin')
    console.log(rollPn);
    document.getElementById("name1").innerHTML = rollPn.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + rollPn.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + rollPn.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + rollPn.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + rollPn.kb;
    document.getElementById("price1").innerHTML = 'price: ' + rollPn.price;
  }
  if (inputOne.toLowerCase()=='umbaric dagger'){
    umbDag = new Weapon(4.5, 1.5, .75, false,'1 iron ingot', 'umbaric dagger')
    console.log(umbDag);
    document.getElementById("name1").innerHTML = umbDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + umbDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + umbDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + umbDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + umbDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + umbDag.price;
  }
  if (inputOne.toLowerCase()=='umbaric scimitar'){
    umbScm = new Weapon(7.5,1,1, false, '2 iron ingots', 'umbaric scimitar')
    console.log(umbScm);
    document.getElementById("name1").innerHTML = umbScm.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + umbScm.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + umbScm.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + umbScm.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + umbScm.kb;
    document.getElementById("price1").innerHTML = 'price: ' + umbScm.price;
  }
  if (inputOne.toLowerCase()=='umbaric spear'){
    umbSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'umbaric spear')
    console.log(umbSpr);
    document.getElementById("name1").innerHTML = umbSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + umbSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + umbSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + umbSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + umbSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + umbSpr.price;
  }
  if (inputOne.toLowerCase()=='umbaric poleaxe'){
    umbPlx = new Weapon(7.5, .68, 1.5, false, '3 iron ingots', 'umbaric poleaxe')
    console.log(umbPlx);
    document.getElementById("name1").innerHTML = umbPlx.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + umbPlx.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + umbPlx.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + umbPlx.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + umbPlx.kb;
    document.getElementById("price1").innerHTML = 'price: ' + umbPlx.price;
  }
  if (inputOne.toLowerCase()=='umbaric mace'){
    umbMac = new Weapon(10.5, .65, 1, true, '4 iron ingots', 'umbaric mace')
    console.log(umbMac);
    document.getElementById("name1").innerHTML = umbMac.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + umbMac.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + umbMac.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + umbMac.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + umbMac.kb;
    document.getElementById("price1").innerHTML = 'price: ' + umbMac.price;
  }
  if (inputOne.toLowerCase()=='umbaric pike'){
    umbPk = new Weapon(7.5, .5, 2, false, '2 iron ingots', 'umbaric pike')
    console.log(umbPk);
    document.getElementById("name1").innerHTML = umbPk.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + umbPk.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + umbPk.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + umbPk.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + umbPk.kb;
    document.getElementById("price1").innerHTML = 'price: ' + umbPk.price;
  }
  if (inputOne.toLowerCase()=='wood-elven dagger'){
    weDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'wood-elven dagger')
    console.log(weDag);
    document.getElementById("name1").innerHTML = weDag.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + weDag.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + weDag.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + weDag.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + weDag.kb;
    document.getElementById("price1").innerHTML = 'price: ' + weDag.price;
  }
  if (inputOne.toLowerCase()=='wood-elven sword'){
    weSrd = new Weapon(8, 1, 1, false, '2 elven steel ingots', 'wood-elven sword')
    console.log(weSrd);
    document.getElementById("name1").innerHTML = weSrd.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + weSrd.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + weSrd.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + weSrd.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + weSrd.kb;
    document.getElementById("price1").innerHTML = 'price: ' + weSrd.price;
  }
  if (inputOne.toLowerCase()=='wood-elven spear'){
    weSpr = new Weapon(7, .83, 1.5, false, '1 elven steel ingot', 'wood-elven spear')
    console.log(weSpr);
    document.getElementById("name1").innerHTML = weSpr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + weSpr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + weSpr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + weSpr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + weSpr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + weSpr.price;
  }
  if (inputOne.toLowerCase()=='wood-elven battlestaff'){
    weBat = new Weapon(8, .68, 1.5, false, '2 elven steel ingots', 'wood-elven battlestaff')
    console.log(weBat);
    document.getElementById("name1").innerHTML = weBat.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + weBat.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + weBat.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + weBat.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + weBat.kb;
    document.getElementById("price1").innerHTML = 'price: ' + weBat.price;
  }
  if (inputOne.toLowerCase()=='wood-elven longspear'){
    weLspr = new Weapon(8, .5, 2, false, '2 elven ingots', 'wood-elven longspear')
    console.log(weLspr);
    document.getElementById("name1").innerHTML = weLspr.id;
    document.getElementById("dmg1").innerHTML = 'damage: ' + weLspr.dmg;
    document.getElementById("reach1").innerHTML = 'reach: ' + weLspr.reach;
    document.getElementById("speed1").innerHTML = 'speed: ' + weLspr.speed;
    document.getElementById("kb1").innerHTML = 'kickback: ' + weLspr.kb;
    document.getElementById("price1").innerHTML = 'price: ' + weLspr.price;
  }
  // if (input One.toLowerCase()==''){
  //   name = new Weapon()
  //   console.log(name);
  // }
}
function pushCardTwo() {
  document.getElementById('body').style.visibility  = 'visible'

  if (inputTwo.toLowerCase() == 'charred mallorn mace') {
    malMac = new Weapon(10.5, .68, 1, true, 'CBC', 'charred mallorn mace' )
    console.log(malMac);
    document.getElementById("name2").innerHTML = malMac.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + malMac.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + malMac.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + malMac.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + malMac.kb;
    document.getElementById("price2").innerHTML = 'price: ' + malMac.price;
  }
  if (inputTwo.toLowerCase()=='angmar dagger'){
    angDag = new Weapon(4.5, 1.5, .75, false, '1 orc steel ingot', 'angmar dagger')
    console.log(angDag);
    document.getElementById("name2").innerHTML = angDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + angDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + angDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + angDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + angDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + angDag.price;
  }
  if (inputTwo.toLowerCase()=='angmar sword'){
    angSrd = new Weapon(7.5, 1, 1, false, '2 orc steel ingots', 'angmar sword')
    console.log(angSrd);
    document.getElementById("name2").innerHTML = angSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + angSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + angSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + angSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + angSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + angSrd.price;
  }
  if (inputTwo.toLowerCase()=='angmar battleaxe'){
    angBat = new Weapon(9.5, 0.75, 1, false, '5 orc steel ingots', 'angmar  battleaxe')
    console.log(angBat);
    document.getElementById("name2").innerHTML = angBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + angBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + angBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + angBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + angBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + angBat.price;
  }
  if (inputTwo.toLowerCase()=='angmar warhammer'){
    angWar = new Weapon(10.5, .65, 1, true, '4 orc  steel  ingots', 'angmar warhammer')
    console.log(angWar);
    document.getElementById("name2").innerHTML = angWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + angWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + angWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + angWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + angWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + angWar.price;
  }
  if (inputTwo.toLowerCase()=='angmar spear'){
    angSpr = new Weapon(6.5, .83, 1.5, false, '1 orc steel ingot', 'angmar spear')
    console.log(angSpr);
    document.getElementById("name2").innerHTML = angSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + angSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + angSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + angSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + angSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + angSpr.price;
  }
  if (inputTwo.toLowerCase()=='angmar poleaxe'){
    angPol = new Weapon(7.5, .68, 1.5, false, '3 orc steel ingot', 'angmar poleaxe')
    console.log(angPol);
    document.getElementById("name2").innerHTML = angPol.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + angPol.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + angPol.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + angPol.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + angPol.kb;
    document.getElementById("price2").innerHTML = 'price: ' + angPol.price;
  }
  if (inputTwo.toLowerCase()=='arnorian dagger'){
    arnDag = new Weapon(4.5, 1.5, .75, false, 'CBC', 'arnorian dagger')
    console.log(name);
    document.getElementById("name2").innerHTML = arnDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + arnDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + arnDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + arnDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + arnDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + arnDag.price;
  }
  if (inputTwo.toLowerCase()=='arnorian sword'){
    arnSrd = new Weapon(7.5, 1, 1, false, 'CBC', 'arnorian sword')
    console.log(arnSrd);
    document.getElementById("name2").innerHTML = arnSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + arnSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + arnSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + arnSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + arnSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + arnSrd.price;
  }
  if (inputTwo.toLowerCase()=='arnorian spear'){
    arnSpr = new Weapon(6.5, .83, 1.5, false, 'CBC', 'arnorian spear')
    console.log(arnSpr);
    document.getElementById("name2").innerHTML = arnSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + arnSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + arnSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + arnSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + arnSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + arnSpr.price;
  }
  if (inputTwo.toLowerCase()=='black númenórean dagger'){
    bNumDag = new Weapon(4.5, 1.5, 0.75, false, 'CBC', 'black númenórean dagger')
    console.log(bNumDag);
    document.getElementById("name2").innerHTML = bNumDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bNumDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bNumDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bNumDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bNumDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bNumDag.price;
  }
  if (inputTwo.toLowerCase()=='black númenórean sword'){
    bNumSrd = new Weapon(7.5, 1, 1, false,  'CBC', 'black númenórean sword')
    console.log(bNumSrd);
    document.getElementById("name2").innerHTML = bNumSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bNumSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bNumSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bNumSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bNumSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bNumSrd.price;
  }
  if (inputTwo.toLowerCase()=='black númenórean spear'){
    bNumSpr = new Weapon(6.5, .83, 1.5, false, 'CBC', 'black númenórean spear')
    console.log(bNumSpr);
    document.getElementById("name2").innerHTML = bNumSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bNumSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bNumSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bNumSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bNumSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bNumSpr.price;
  }
  if (inputTwo.toLowerCase()=='black númenórean mace'){
    bNumMac = new Weapon(10.5, .65, 1, true, 'CBC', 'black númenórean mace')
    console.log(bNumMac);
    document.getElementById("name2").innerHTML = bNumMac.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bNumMac.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bNumMac.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bNumMac.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bNumMac.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bNumMac.price;
  }
  if (inputTwo.toLowerCase()=='black uruk dagger'){
    bUrkDag = new Weapon(5, 1.5, 0.75, false, '1 black uruk steel ingot', 'black uruk dagger')
    console.log(bUrkDag);
    document.getElementById("name2").innerHTML = bUrkDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bUrkDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bUrkDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bUrkDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bUrkDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bUrkDag.price;
  }
  if (inputTwo.toLowerCase()=='black uruk cleaver'){
    bUrkClvr = new Weapon(8, 1, 1, false, '2 black uruk steel ingots', 'black uruk cleaver')
    console.log(bUrkClvr);
    document.getElementById("name2").innerHTML = bUrkClvr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bUrkClvr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bUrkClvr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bUrkClvr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bUrkClvr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bUrkClvr.price;
  }
  if (inputTwo.toLowerCase()=='black uruk battleaxe'){
    bUrkBat = new Weapon(10, .75, 1, false, '5 black uruk steel ingots', 'black uruk battleaxe')
    console.log(bUrkBat);
    document.getElementById("name2").innerHTML = bUrkBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bUrkBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bUrkBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bUrkBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bUrkBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bUrkBat.price;
  }
  if (inputTwo.toLowerCase()=='black uruk spear'){
    bUrkSpr = new Weapon(7, .83, 1.5, false, '1 black uruk steel ingot', 'black uruk spear')
    console.log(bUrkSpr);
    document.getElementById("name2").innerHTML = bUrkSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bUrkSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bUrkSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bUrkSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bUrkSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bUrkSpr.price;
  }
  if (inputTwo.toLowerCase()=='black uruk warhammer'){
    bUrkWar = new Weapon(11, .65, 1, true, '4 black uruk steel ingots', 'black uruk warhammer')
    console.log(bUrkWar);
    document.getElementById("name2").innerHTML = bUrkWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bUrkWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bUrkWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bUrkWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bUrkWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bUrkWar.price;
  }
  if (inputTwo.toLowerCase()=='blue dwarven dagger'){
    bDwrfDag = new Weapon(5, 1.5, .75, false, '1 blue dwarven ingot', 'blue dwarven dagger')
    console.log(bDwrfDag);
    document.getElementById("name2").innerHTML = bDwrfDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bDwrfDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bDwrfDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bDwrfDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bDwrfDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bDwrfDag.price;
  }
  if (inputTwo.toLowerCase()=='blue dwarven sword'){
    bDwrfSrd = new Weapon(8, 1, 1, false, '2 blue dwarven ingots', 'blue dwarven sword')
    console.log(bDwrfSrd);
    document.getElementById("name2").innerHTML = bDwrfSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bDwrfSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bDwrfSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bDwrfSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bDwrfSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bDwrfSrd.price;
  }
  if (inputTwo.toLowerCase()=='blue dwarven battleaxe'){
    bDwrfBat = new Weapon(10, .75, 1, false, '5 blue dwarven ingots', 'blue dwarven battleaxe')
    console.log(bDwrfBat);
    document.getElementById("name2").innerHTML = bDwrfBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bDwrfBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bDwrfBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bDwrfBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bDwrfBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bDwrfBat.price;
  }
  if (inputTwo.toLowerCase()=='blue dwarven warhammer'){
    bDwrfWar = new Weapon(11, .65, 1, true,  '4 blue dwarven ingots', 'blue dwarven warhammer')
    console.log(bDwrfWar);
    document.getElementById("name2").innerHTML = bDwrfWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bDwrfWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bDwrfWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bDwrfWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bDwrfWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bDwrfWar.price;
  }
  if (inputTwo.toLowerCase()=='blue dwarven spear'){
    bDwrfSpr = new Weapon(7, .83, 1.5, false, '1 blue dwarven ingot', 'blue dwarven spear')
    console.log(bDwrfSpr);
    document.getElementById("name2").innerHTML = bDwrfSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bDwrfSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bDwrfSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bDwrfSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bDwrfSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bDwrfSpr.price;
  }
  if (inputTwo.toLowerCase()=='blue dwarven pike'){
    bDwrfPk = new Weapon(8, .5, 2, false, '2 blue dwarven ingot', 'blue dwarven pike')
    console.log(bDwrfPk);
    document.getElementById("name2").innerHTML = bDwrfPk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bDwrfPk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bDwrfPk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bDwrfPk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bDwrfPk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bDwrfPk.price;
  }
  if (inputTwo.toLowerCase()=='bronze sword'){
    brnzSrd = new Weapon(6.5, 1, 1, false, '2 bronze ingots', 'bronze sword')
    console.log(brnzSrd);
    document.getElementById("name2").innerHTML = brnzSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + brnzSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + brnzSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + brnzSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + brnzSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + brnzSrd.price;
  }
  if (inputTwo.toLowerCase()=='bronze dagger'){
    brnzDag = new Weapon(3.5, 1.5, .75, false, '1 bronze ingot', 'bronze dagger')
    console.log(brnzDag);
    document.getElementById("name2").innerHTML = brnzDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + brnzDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + brnzDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + brnzDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + brnzDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + brnzDag.price;
  }
  if (inputTwo.toLowerCase()=='bronze spear'){
    brnzSpr = new Weapon(5.5, .83, 1.5, false, '1 bronze ingot', 'bronze spear')
    console.log(brnzSpr);
    document.getElementById("name2").innerHTML = brnzSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + brnzSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + brnzSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + brnzSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + brnzSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + brnzSpr.price;
  }
  if (inputTwo.toLowerCase()=='bronze battleaxe'){
    brnzBat = new Weapon(8.5, .75, 1, false, '5 bronze ingots', 'bronze battleaxe')
    console.log(brnzBat);
    document.getElementById("name2").innerHTML = brnzBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + brnzBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + brnzBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + brnzBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + brnzBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + brnzBat.price;
  }
  if (inputTwo.toLowerCase()=='corsair dagger'){
    corDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingot', 'corsair dagger')
    console.log(corDag);
    document.getElementById("name2").innerHTML = corDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + corDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + corDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + corDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + corDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + corDag.price;
  }
  if (inputTwo.toLowerCase()=='corsair eket'){
    corEkt = new Weapon(7.5, 1, 1, false, '2 iron ingots', 'corsair eket')
    console.log(corEkt);
    document.getElementById("name2").innerHTML = corEkt.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + corEkt.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + corEkt.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + corEkt.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + corEkt.kb;
    document.getElementById("price2").innerHTML = 'price: ' + corEkt.price;
  }
  if (inputTwo.toLowerCase()=='corsair harpoon'){
    corHrp = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'corsair harpoon')
    console.log(corHrp);
    document.getElementById("name2").innerHTML = corHrp.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + corHrp.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + corHrp.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + corHrp.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + corHrp.kb;
    document.getElementById("price2").innerHTML = 'price: ' + corHrp.price;
  }
  if (inputTwo.toLowerCase()=='corsair battleaxe'){
    corBat = new Weapon(9.5, .75, 1, false, '5 iron ingots', 'corsair battleaxe')
    console.log(corBat);
    document.getElementById("name2").innerHTML = corBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + corBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + corBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + corBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + corBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + corBat.price;
  }
  if (inputTwo.toLowerCase()=='dol amroth sword'){
    daSrd = new Weapon(8, 1, 1, false, '2 iron ingots', 'dol amroth sword')
    console.log(daSrd);
    document.getElementById("name2").innerHTML = daSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + daSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + daSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + daSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + daSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + daSrd.price;
  }
  if (inputTwo.toLowerCase()=='dol amroth dagger'){
    daDag = new Weapon(5, 1.5, .75, false, '1 iron ingot', 'dol amroth dagger')
    console.log(daDag);
    document.getElementById("name2").innerHTML = daDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + daDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + daDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + daDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + daDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + daDag.price;
  }
  if (inputTwo.toLowerCase()=='dol amroth lance'){
    daLan = new Weapon(8, .5, 2, true, '2 iron ingots', 'dol amroth lance')
    console.log(daLan);
    document.getElementById("name2").innerHTML = daLan.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + daLan.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + daLan.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + daLan.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + daLan.kb;
    document.getElementById("price2").innerHTML = 'price: ' + daLan.price;
  }
  if (inputTwo.toLowerCase()=='dol amroth longspear'){
    daLspr = new Weapon(8, .5, 2, false, '2 iron ingots', 'dol amroth longspear')
    console.log(daLspr);
    document.getElementById("name2").innerHTML = daLspr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + daLspr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + daLspr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + daLspr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + daLspr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + daLspr.price;
  }
  if (inputTwo.toLowerCase()=='dol guldur sword'){
    dgSrd = new Weapon(7.5, 1, 1, false, '2 orc steel ingots', 'dol guldur sword')
    console.log(dgSrd);
    document.getElementById("name2").innerHTML = dgSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dgSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dgSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dgSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dgSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dgSrd.price;
  }
  if (inputTwo.toLowerCase()=='dol guldur dagger'){
    dgDag = new Weapon(4.5, 1.5, .75, false, '1 orc steel ingot', 'dol guldur dagger')
    console.log(dgDag);
    document.getElementById("name2").innerHTML = dgDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dgDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dgDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dgDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dgDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dgDag.price;
  }
  if (inputTwo.toLowerCase()=='dol guldur battleaxe'){
    dgBat = new Weapon(9.5, .75, 1, false, '5 orc steel ingot', 'dol guldur battleaxe')
    console.log(dgBat);
    document.getElementById("name2").innerHTML = dgBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dgBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dgBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dgBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dgBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dgBat.price;
  }
  if (inputTwo.toLowerCase()=='dol guldur warhammer'){
    dgWar = new Weapon(10.5, .65, 1, true, '4 orc steel ingots', 'dol guldur warhammer')
    console.log(dgWar);
    document.getElementById("name2").innerHTML = dgWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dgWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dgWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dgWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dgWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dgWar.price;
  }
  if (inputTwo.toLowerCase()=='dol guldur spear'){
    dgSpr = new Weapon(6.5, .83, 1.5, false, '1 orc steel ingot', 'dol guldur spear')
    console.log(dgSpr);
    document.getElementById("name2").innerHTML = dgSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dgSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dgSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dgSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dgSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dgSpr.price;
  }
  if (inputTwo.toLowerCase()=='dol guldur spike'){
    dgSpk = new Weapon(7.5, .5, 2, false, '2 orc steel ingot', 'dol guldur spike')
    console.log(dgSpk);
    document.getElementById("name2").innerHTML = dgSpk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dgSpk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dgSpk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dgSpk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dgSpk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dgSpk.price;
  }
  if (inputTwo.toLowerCase()=='dorwinion elven dagger'){
    dorElDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'dorwinion elven dagger')
    console.log(dorElDag);
    document.getElementById("name2").innerHTML = dorElDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dorElDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dorElDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dorElDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dorElDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dorElDag.price;
  }
  if (inputTwo.toLowerCase()=='dorwinion elven sword'){
    dorElSrd = new Weapon(8, 1, 1, false, '2 elven steel ingot', 'dorwinion elven sword')
    console.log(dorElSrd);
    document.getElementById("name2").innerHTML = dorElSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dorElSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dorElSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dorElSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dorElSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dorElSrd.price;
  }
  if (inputTwo.toLowerCase()=='spear of bladorthin'){
    bldSpr = new Weapon(6.5, .83, 1.5, false, '1 dwarven steel ingot', 'spear of bladorthin')
    console.log(bldSpr);
    document.getElementById("name2").innerHTML = bldSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + bldSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + bldSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + bldSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + bldSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + bldSpr.price;
  }
  if (inputTwo.toLowerCase()=='dunlending club'){
    dunClb = new Weapon(5, .65, 1, true, '3 planks', 'dunlending club')
    console.log(dunClb);
    document.getElementById("name2").innerHTML = dunClb.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dunClb.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dunClb.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dunClb.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dunClb.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dunClb.price;
  }
  if (inputTwo.toLowerCase()=='dunlending trident'){
    dunTri = new Weapon(7, .68, 1.5, false, '3 iron ingots', 'dunlending trident')
    console.log(dunTri);
    document.getElementById("name2").innerHTML = dunTri.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dunTri.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dunTri.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dunTri.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dunTri.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dunTri.price;
  }
  if (inputTwo.toLowerCase()=='dwarven dagger'){
    dwrfDag = new Weapon(5, 1.5, .75, false, '1 dwarven steel ingot', 'dwarven dagger')
    console.log(dwrfDag);
    document.getElementById("name2").innerHTML = dwrfDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dwrfDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dwrfDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dwrfDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dwrfDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dwrfDag.price;
  }
  if (inputTwo.toLowerCase()=='dwarven sword'){
    dwrfSrd = new Weapon(8, 1, 1, false, '2 dwarven steel ingots', 'dwarven sword')
    console.log(dwrfSrd);
    document.getElementById("name2").innerHTML = dwrfSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dwrfSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dwrfSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dwrfSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dwrfSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dwrfSrd.price;
  }
  if (inputTwo.toLowerCase()=='dwarven battleaxe'){
    dwrfBat = new Weapon(10, .75, 1, false, '5 dwarven steel ingots', 'dwarven battleaxe')
    console.log(dwrfBat);
    document.getElementById("name2").innerHTML = dwrfBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dwrfBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dwrfBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dwrfBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dwrfBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dwrfBat.price;
  }
  if (inputTwo.toLowerCase()=='dwarven warhammer'){
    dwrfWar = new Weapon(11, .65, 1, true, '4 dwarven steel ingots', 'dwarven warhammer')
    console.log(dwrfWar);
    document.getElementById("name2").innerHTML = dwrfWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dwrfWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dwrfWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dwrfWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dwrfWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dwrfWar.price;
  }
  if (inputTwo.toLowerCase()=='dwarven spear'){
    dwrfSpr = new Weapon(7, .83, 1.5,false, '1 dwarven steel ingot', 'dwarven spear')
    console.log(dwrfSpr);
    document.getElementById("name2").innerHTML = dwrfSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dwrfSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dwrfSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dwrfSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dwrfSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dwrfSpr.price;
  }
  if (inputTwo.toLowerCase()=='dwarven pike'){
    dwrfPk = new Weapon(8, .5, 2, false, '2 dwarven steel ingots', 'dwarven pike')
    console.log(dwrfPk);
    document.getElementById("name2").innerHTML = dwrfPk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + dwrfPk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + dwrfPk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + dwrfPk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + dwrfPk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + dwrfPk.price;
  }
  if (inputTwo.toLowerCase()=='galadhrim dagger'){
    galDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'galadhrim dagger')
    console.log(galDag);
    document.getElementById("name2").innerHTML = galDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + galDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + galDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + galDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + galDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + galDag.price;
  }
  if (inputTwo.toLowerCase()=='galadhrim sword'){
    galSrd = new Weapon(8, 1,1, .75, false, '2 elven steel ingots', 'galadhrim sword')
    console.log(galSrd);
    document.getElementById("name2").innerHTML = galSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + galSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + galSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + galSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + galSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + galSrd.price;
  }
  if (inputTwo.toLowerCase()=='galadhrim spear'){
    galSpr = new Weapon(7, .83, 1.5, false, '1 elven steel ingot', 'galadhrim spear')
    console.log(galSpr);
    document.getElementById("name2").innerHTML = galSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + galSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + galSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + galSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + galSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + galSpr.price;
  }
  if (inputTwo.toLowerCase()=='galadhrim longspear'){
    galLspr = new Weapon(8, .5, 2, false, '2 elven steel ingots', 'galadhrim longspear')
    console.log(galLspr);
    document.getElementById("name2").innerHTML = galLspr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + galLspr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + galLspr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + galLspr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + galLspr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + galLspr.price;
  }
  if (inputTwo.toLowerCase()=='galadhrim battlestaff'){
    galBat = new Weapon(8, .68, 1.5, false, '2 elven steel ingots', 'galadhrim battlestaff')
    console.log(galBat);
    document.getElementById("name2").innerHTML = galBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + galBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + galBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + galBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + galBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + galBat.price;
  }
  if (inputTwo.toLowerCase()=='gondolinian sword'){
    gndSrd = new Weapon(10, 1, 1, false, 'CBC', 'gondolinian sword')
    console.log(gndSrd);
    document.getElementById("name2").innerHTML = gndSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gndSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gndSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gndSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gndSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gndSrd.price;
  }
  if (inputTwo.toLowerCase()=='gondorian sword'){
    gonSrd = new Weapon(7.5, 1, 1, false, '2 iron ingots', 'gondorian sword')
    console.log(gonSrd);
    document.getElementById("name2").innerHTML = gonSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gonSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gonSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gonSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gonSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gonSrd.price;
  }
  if (inputTwo.toLowerCase()=='gondorian dagger'){
    gonDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingots', 'gondorian dagger')
    console.log(gonDag);
    document.getElementById("name2").innerHTML = gonDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gonDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gonDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gonDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gonDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gonDag.price;
  }
  if (inputTwo.toLowerCase()=='gondorian warhammer'){
    gonWar = new Weapon(10.5, .65, 1, true, '4 iron ingots', 'gondorian warhammer')
    console.log(gonWar);
    document.getElementById("name2").innerHTML = gonWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gonWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gonWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gonWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gonWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gonWar.price;
  }
  if (inputTwo.toLowerCase()=='gondorian spear'){
    gonSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'gondorian spear')
    console.log(gonSpr);
    document.getElementById("name2").innerHTML = gonSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gonSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gonSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gonSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gonSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gonSpr.price;
  }
  if (inputTwo.toLowerCase()=='gondorian lance'){
    gonLan = new Weapon(7.5, .5, 2, true, '2 iron ingot', 'gondorian lance')
    console.log(gonLan);
    document.getElementById("name2").innerHTML = gonLan.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gonLan.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gonLan.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gonLan.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gonLan.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gonLan.price;
  }
  if (inputTwo.toLowerCase()=='gondorian pike'){
    gonPk = new Weapon(7.5, .5, 2, false, '2 iron ingot', 'gondorian pike')
    console.log(gonPk);
    document.getElementById("name2").innerHTML = gonPk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gonPk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gonPk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gonPk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gonPk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gonPk.price;
  }
  if (inputTwo.toLowerCase()=='gulfen khopesh'){
    gulKph = new Weapon(7.5, 1, 1, false, '2  bronze ingots', 'gulfen khopesh')
    console.log(gulKph);
    document.getElementById("name2").innerHTML = gulKph.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + gulKph.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + gulKph.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + gulKph.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + gulKph.kb;
    document.getElementById("price2").innerHTML = 'price: ' + gulKph.price;
  }
  if (inputTwo.toLowerCase()=='half-troll dagger'){
    htrDag = new Weapon(4.5, 1.5, .75, false, '1 flint', 'half-troll dagger')
    console.log(htrDag);
    document.getElementById("name2").innerHTML = htrDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + htrDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + htrDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + htrDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + htrDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + htrDag.price;
  }
  if (inputTwo.toLowerCase()=='half-troll sword'){
    htrSrd = new Weapon(7.5, 1, 1, false, '2 flint', 'half-troll dagger')
    console.log(htrSrd);
    document.getElementById("name2").innerHTML = htrSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + htrSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + htrSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + htrSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + htrSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + htrSrd.price;
  }
  if (inputTwo.toLowerCase()=='half-troll pike'){
    htrPk = new Weapon(7.5, .5, 2, false, '2 flint', 'half-troll pike')
    console.log(htrPk);
    document.getElementById("name2").innerHTML = htrPk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + htrPk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + htrPk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + htrPk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + htrPk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + htrPk.price;
  }
  if (inputTwo.toLowerCase()=='half-troll warhammer'){
    htrWar = new Weapon(10.5, .65, 1, true, '4 flint', 'half=troll warhammer')
    console.log(htrWar);
    document.getElementById("name2").innerHTML = htrWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + htrWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + htrWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + htrWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + htrWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + htrWar.price;
  }
  if (inputTwo.toLowerCase()=='half-troll mace'){
    htrMac = new Weapon(10.5, .65, 1, true, '4 flint', 'half-troll mace')
    console.log(htrMac);
    document.getElementById("name2").innerHTML = htrMac.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + htrMac.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + htrMac.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + htrMac.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + htrMac.kb;
    document.getElementById("price2").innerHTML = 'price: ' + htrMac.price;
  }
  if (inputTwo.toLowerCase()=='half-troll battleaxe'){
    htrBat = new Weapon(9.5, .75, 1, false, '5 flint', 'half troll battleaxe')
    console.log(htrBat);
    document.getElementById("name2").innerHTML = htrBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + htrBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + htrBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + htrBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + htrBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + htrBat.price;
  }
  if (inputTwo.toLowerCase()=='haradic sword'){
    harSrd = new Weapon(7.5, 1, 1, false, '2 bronze ingots', 'haradic sword')
    console.log(harSrd);
    document.getElementById("name2").innerHTML = harSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + harSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + harSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + harSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + harSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + harSrd.price;
  }
  if (inputTwo.toLowerCase()=='haradic dagger'){
    harDag = new Weapon(4.5, 1.5, .75, false, '1 bronze ingot', 'haradic dagger')
    console.log(harDag);
    document.getElementById("name2").innerHTML = harDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + harDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + harDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + harDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + harDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + harDag.price;
  }
  if (inputTwo.toLowerCase()=='haradic spear'){
    harSpr = new Weapon(6.5, .83, 1.5, false, '1 bronze ingot','haradic spear')
    console.log(harSpr);
    document.getElementById("name2").innerHTML = harSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + harSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + harSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + harSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + harSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + harSpr.price;
  }
  if (inputTwo.toLowerCase()=='haradic longspear'){
    harLspr = new Weapon(7.5, .5, 2, false, '2 bronze ingots', 'haradic longspear')
    console.log(harLspr);
    document.getElementById("name2").innerHTML = harLspr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + harLspr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + harLspr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + harLspr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + harLspr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + harLspr.price;
  }
  if (inputTwo.toLowerCase()=='blacksmith hammer'){
    blkHam = new Weapon(9.5, .68, 1, true, 'CBC', 'blacksmith hammer')
    console.log(blkHam);
    document.getElementById("name2").innerHTML = blkHam.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + blkHam.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + blkHam.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + blkHam.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + blkHam.kb;
    document.getElementById("price2").innerHTML = 'price: ' + blkHam.price;
  }
  if (inputTwo.toLowerCase()=='lindon dagger'){
    linDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'lindon dagger')
    console.log(linDag);
    document.getElementById("name2").innerHTML = linDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + linDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + linDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + linDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + linDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + linDag.price;
  }
  if (inputTwo.toLowerCase()=='lindon sword'){
    linSrd = new Weapon(8, 1, 1, false, '2 elven steel ingots', 'lindon sword')
    console.log(linSrd);
    document.getElementById("name2").innerHTML = linSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + linSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + linSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + linSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + linSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + linSrd.price;
  }
  if (inputTwo.toLowerCase()=='lindon spear'){
    linSpr = new Weapon(7, .83, 1.5,  false, '1 elven steel ingot', 'lindon spear')
    console.log(linSpr);
    document.getElementById("name2").innerHTML = linSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + linSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + linSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + linSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + linSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + linSpr.price;
  }
  if (inputTwo.toLowerCase()=='lindon battlestaff'){
    linBat = new Weapon(8, .65, 1.5, false, '2 elven steel ingots', 'lindon battlestaff')
    console.log(linBat);
    document.getElementById("name2").innerHTML = linBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + linBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + linBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + linBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + linBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + linBat.price;
  }
  if (inputTwo.toLowerCase()=='lindon longspear'){
    linLspr = new Weapon(8, .5, 2, false, '2 elven steel ingots')
    console.log(linLspr);
    document.getElementById("name2").innerHTML = linLspr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + linLspr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + linLspr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + linLspr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + linLspr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + linLspr.price;
  }
  if (inputTwo.toLowerCase()=='lossarnach battleaxe'){
    lssBat = new Weapon(9, .75, 1, false, '5 iron ingots', 'lossarnach battleaxe')
    console.log(lssBat);
    document.getElementById("name2").innerHTML = lssBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + lssBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + lssBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + lssBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + lssBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + lssBat.price;
  }
  if (inputTwo.toLowerCase()=='mallorn sword'){
    malSrd = new Weapon(6.5, 1, 1, false, '2 mallorn planks', 'mallorn sword')
    console.log(malSrd);
    document.getElementById("name2").innerHTML = malSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + malSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + malSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + malSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + malSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + malSrd.price;
  }
  if (inputTwo.toLowerCase()=='mithril dagger'){
    mitDag = new Weapon(7, 1.5, .75, false, '1 mithril ingot', 'mithril dagger')
    console.log(motDag);
    document.getElementById("name2").innerHTML = mitDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + mitDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + mitDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + mitDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + mitDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + mitDag.price;
  }
  if (inputTwo.toLowerCase()=='mithril sword'){
    mitSrd = new Weapon(10, 1, 1, false,  '2 mithril ingots', 'mithril sword')
    console.log(mitSrd);
    document.getElementById("name2").innerHTML = mitSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + mitSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + mitSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + mitSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + mitSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + mitSrd.price;
  }
  if (inputTwo.toLowerCase()=='mithril battleaxe'){
    mitBat = new Weapon(12, .75, 1, false, '5 mithril ingots',  'mithril battleaxe')
    console.log(mitBat);
    document.getElementById("name2").innerHTML = mitBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + mitBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + mitBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + mitBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + mitBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + mitBat.price;
  }
  if (inputTwo.toLowerCase()=='mithril warhammer'){
    mitWar = new Weapon(13, .65, 1, true, '4 mithril ingots', 'mithril warhammer')
    console.log(mitWar);
    document.getElementById("name2").innerHTML = mitWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + mitWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + mitWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + mitWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + mitWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + mitWar.price;
  }
  if (inputTwo.toLowerCase()=='mithril spear'){
    mitSpr = new Weapon(9, .83, 1.5, false, '1 mithril ingot', 'mithril spear')
    console.log(mitSpr);
    document.getElementById("name2").innerHTML = mitSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + mitSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + mitSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + mitSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + mitSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + mitSpr.price;
  }
  if (inputTwo.toLowerCase()=='mithril halberd'){
    mitHal = new Weapon(10, .5, 2, false, '3 mithril ingots','mithril halberd')
    console.log(mitHal);
    document.getElementById("name2").innerHTML = mitHal.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + mitHal.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + mitHal.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + mitHal.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + mitHal.kb;
    document.getElementById("price2").innerHTML = 'price: ' + mitHal.price;
  }
  if (inputTwo.toLowerCase()=='mordor dagger'){
    morDag = new Weapon(4.5, 1.5, .75, false, '1 orc steel ingot', 'mordor dagger')
    console.log(morDag);
    document.getElementById("name2").innerHTML = morDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + morDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + morDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + morDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + morDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + morDag.price;
  }
  if (inputTwo.toLowerCase()=='mordor scimitar'){
    morScm = new Weapon(7.5, 1, 1, false, '2 orc steel ingots', 'mordor scimitar')
    console.log(morScm);
    document.getElementById("name2").innerHTML = morScm.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + morScm.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + morScm.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + morScm.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + morScm.kb;
    document.getElementById("price2").innerHTML = 'price: ' + morScm.price;
  }
  if (inputTwo.toLowerCase()=='mordor spear'){
    morSpr = new Weapon(6.5, .83, 1.5, false, '1 orc steel ingot', 'mordor spear')
    console.log(morSpr);
    document.getElementById("name2").innerHTML = morSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + morSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + morSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + morSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + morSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + morSpr.price;
  }
  if (inputTwo.toLowerCase()=='mordor battleaxe'){
    morBat = new Weapon(8.5, .75, 1, false, '5 orc steel ingots', 'mordor battleaxe')
    console.log(morBat);
    document.getElementById("name2").innerHTML = morBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + morBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + morBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + morBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + morBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + morBat.price;
  }
  if (inputTwo.toLowerCase()=='mordor warhammer'){
    morWar = new Weapon(9.5, .65, 1, true, '4 orc steel ingots', 'mordor warhammer')
    console.log(morWar);
    document.getElementById("name2").innerHTML = morWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + morWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + morWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + morWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + morWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + morWar.price;
  }
  if (inputTwo.toLowerCase()=='mordor warscythe'){
    morWsc = new Weapon(7.5, .68, 1.5, false, '3 orc steel ingots', 'mordor warscythe')
    console.log(morWsc);
    document.getElementById("name2").innerHTML = morWsc.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + morWsc.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + morWsc.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + morWsc.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + morWsc.kb;
    document.getElementById("price2").innerHTML = 'price: ' + morWsc.price;
  }
  if (inputTwo.toLowerCase()=='old-haradic sacrificial dagger'){
    ohsd = new Weapon(4.5, 1.5, .75, false, 'CBC', 'old-haradic sacrificial dagger')
    console.log(ohsd);
    document.getElementById("name2").innerHTML = ohsd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + ohsd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + ohsd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + ohsd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + ohsd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + ohsd.price;
  }
  if (inputTwo.toLowerCase()=='orc skull staff'){
    oss = new Weapon(6.5, 1, 1, true, '1 skeleton skull', 'orc skull staff')
    console.log(oss);
    document.getElementById("name2").innerHTML = oss.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + oss.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + oss.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + oss.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + oss.kb;
    document.getElementById("price2").innerHTML = 'price: ' + oss.price;
  }
  if (inputTwo.toLowerCase()=='pelargir trident'){
    pelTri = new Weapon(7.5, .68, 1.5, false, '3 iron ingots', 'pelargir trident')
    console.log(pelTri);
    document.getElementById("name2").innerHTML = pelTri.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + pelTri.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + pelTri.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + pelTri.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + pelTri.kb;
    document.getElementById("price2").innerHTML = 'price: ' + pelTri.price;
  }
  if (inputTwo.toLowerCase()=='pelargir eket'){
    pelEkt = new Weapon(6.5, 1, 1, false, '2 iron ingots', 'pelargir eket')
    console.log(name);
    document.getElementById("name2").innerHTML = pelEkt.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + pelEkt.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + pelEkt.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + pelEkt.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + pelEkt.kb;
    document.getElementById("price2").innerHTML = 'price: ' + pelEkt.price;
  }
  if (inputTwo.toLowerCase()=='utumno dagger'){
    utDag = new Weapon(5.5, 1.5, .75, false, 'CBC', 'utumno dagger')
    console.log(utDag);
    document.getElementById("name2").innerHTML = utDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + utDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + utDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + utDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + utDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + utDag.price;
  }
  if (inputTwo.toLowerCase()=='utumno sword'){
    utSrd = new Weapon(8.5, 1, 1, false, 'CBC', 'utumno sword')
    console.log(utSrd);
    document.getElementById("name2").innerHTML = utSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + utSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + utSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + utSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + utSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + utSrd.price;
  }
  if (inputTwo.toLowerCase()=='utumno spear'){
    utSpr = new Weapon(7.5, .83, 1.5, false, 'CBC', 'utumno spear')
    console.log(utSpr);
    document.getElementById("name2").innerHTML = utSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + utSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + utSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + utSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + utSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + utSpr.price;
  }
  if (inputTwo.toLowerCase()=='utumno battleaxe'){
    utBat = new Weapon(10.5, .75, 1, false, 'CBC', 'utumno battleaxe')
    console.log(utBat);
    document.getElementById("name2").innerHTML = utBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + utBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + utBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + utBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + utBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + utBat.price;
  }
  if (inputTwo.toLowerCase()=='utumno warhammer'){
    utWar = new Weapon(11.5, .68, 1, true, 'CBC', 'utumno warhammer')
    console.log(utWar);
    document.getElementById("name2").innerHTML = utWar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + utWar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + utWar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + utWar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + utWar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + utWar.price;
  }
  if (inputTwo.toLowerCase()=='rhûnic dagger'){
    rhnDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingot', 'rhûnic dagger')
    console.log(rhnDag);
    document.getElementById("name2").innerHTML = rhnDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhnDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhnDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhnDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhnDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhnDag.price;
  }
  if (inputTwo.toLowerCase()=='rhûnic sword'){
    rhnSrd = new Weapon(7.5, 1, 1, false, '2 iron ingot', 'rhûnic sword')
    console.log(rhnSrd);
    document.getElementById("name2").innerHTML = rhnSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhnSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhnSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhnSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhnSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhnSrd.price;
  }
  if (inputTwo.toLowerCase()=='rhûnic spear'){
    rhnSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'rhûnic spear')
    console.log(rhnSpr);
    document.getElementById("name2").innerHTML = rhnSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhnSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhnSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhnSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhnSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhnSpr.price;
  }
  if (inputTwo.toLowerCase()=='rhûnic bardiche'){
    rhnBar = new Weapon(7.5, .83, 1.5, false, '3 iron ingots', 'rhûnic bardiche')
    console.log(rhnBar);
    document.getElementById("name2").innerHTML = rhnBar.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhnBar.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhnBar.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhnBar.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhnBar.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhnBar.price;
  }
  if (inputTwo.toLowerCase()=='rhûnic pike'){
    rhnPk = new Weapon(7.5, .5, 2, false, '2 iron ingots', 'rhûnic pike')
    console.log(rhnPk);
    document.getElementById("name2").innerHTML = rhnPk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhnPk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhnPk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhnPk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhnPk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhnPk.price;
  }
  if (inputTwo.toLowerCase()=='rhûnic battleaxe'){
    rhnBat = new Weapon(9.5, .75, 1, false, '5 iron ingots', 'rhûnic battleaxe')
    console.log(rhnBat);
    document.getElementById("name2").innerHTML = rhnBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhnBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhnBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhnBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhnBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhnBat.price;
  }
  if (inputTwo.toLowerCase()=='rivendell dagger'){
    rivDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'rivendell dagger')
    console.log(rivDag);
    document.getElementById("name2").innerHTML = rivDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rivDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rivDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rivDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rivDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rivDag.price;
  }
  if (inputTwo.toLowerCase()=='rivendell sword'){
    rivSrd = new Weapon(8, 1, 1, false, '2 elven steel ingots', 'rivendell sword')
    console.log(rivSrd);
    document.getElementById("name2").innerHTML = rivSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rivSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rivSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rivSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rivSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rivSrd.price;
  }
  if (inputTwo.toLowerCase()=='rivendell spear'){
    rivSpr = new Weapon(7, .83, 1.5,  false, '1 elven steel ingot', 'rivendell spear')
    console.log(rivSpr);
    document.getElementById("name2").innerHTML = rivSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rivSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rivSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rivSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rivSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rivSpr.price;
  }
  if (inputTwo.toLowerCase()=='rivendell battlestaff'){
    rivBat = new Weapon(8, .65, 1.5, false, '2 elven steel ingots', 'rivendell battlestaff')
    console.log(rivBat);
    document.getElementById("name2").innerHTML = rivBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rivBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rivBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rivBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rivBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rivBat.price;
  }
  if (inputTwo.toLowerCase()=='rivendell longspear'){
    rivLspr = new Weapon(8, .5, 2, false, '2 elven steel ingots')
    console.log(rivLspr);
    document.getElementById("name2").innerHTML = rivLspr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rivLspr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rivLspr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rivLspr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rivLspr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rivLspr.price;
  }
  if (inputTwo.toLowerCase()=='rohirric dagger'){
    rhrDag = new Weapon(4.5, 1.5, .75, false, '1 iron ingot', 'rohirric dagger')
    console.log(rhrDag);
    document.getElementById("name2").innerHTML = rhrDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhrDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhrDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhrDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhrDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhrDag.price;
  }
  if (inputTwo.toLowerCase()=='rohirric sword'){
    rhrSrd = new Weapon(7.5, 1, 1, false, '2 iron ingots', 'rohirric sword')
    console.log(rhrSrd);
    document.getElementById("name2").innerHTML = rhrSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhrSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhrSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhrSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhrSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhrSrd.price;
  }
  if (inputTwo.toLowerCase()=='rohirric spear'){
    rhrSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'rohirric spear')
    console.log(rhrSpr);
    document.getElementById("name2").innerHTML = rhrSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhrSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhrSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhrSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhrSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhrSpr.price;
  }
  if (inputTwo.toLowerCase()=='rohirric battleaxe'){
    rhrBat = new Weapon(9.5, .75, 1, false, '5 iron ingots', 'rohirric battleaxe')
    console.log(rhrBat);
    document.getElementById("name2").innerHTML = rhrBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhrBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhrBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhrBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhrBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhrBat.price;
  }
  if (inputTwo.toLowerCase()=='rohirric lance'){
    rhrLan = new Weapon(7.5, .5, 2, false, '2 iron  ingots', 'rohirric lance')
    console.log(rhrLan);
    document.getElementById("name2").innerHTML = rhrLan.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rhrLan.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rhrLan.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rhrLan.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rhrLan.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rhrLan.price;
  }
  if (inputTwo.toLowerCase()=='rolling pin'){
    rollPn = new Weapon(5, 1, 1, false, '1 plank', 'rolling pin')
    console.log(rollPn);
    document.getElementById("name2").innerHTML = rollPn.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + rollPn.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + rollPn.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + rollPn.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + rollPn.kb;
    document.getElementById("price2").innerHTML = 'price: ' + rollPn.price;
  }
  if (inputTwo.toLowerCase()=='umbaric dagger'){
    umbDag = new Weapon(4.5, 1.5, .75, false,'1 iron ingot', 'umbaric dagger')
    console.log(umbDag);
    document.getElementById("name2").innerHTML = umbDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + umbDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + umbDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + umbDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + umbDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + umbDag.price;
  }
  if (inputTwo.toLowerCase()=='umbaric scimitar'){
    umbScm = new Weapon(7.5,1,1, false, '2 iron ingots', 'umbaric scimitar')
    console.log(umbScm);
    document.getElementById("name2").innerHTML = umbScm.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + umbScm.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + umbScm.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + umbScm.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + umbScm.kb;
    document.getElementById("price2").innerHTML = 'price: ' + umbScm.price;
  }
  if (inputTwo.toLowerCase()=='umbaric spear'){
    umbSpr = new Weapon(6.5, .83, 1.5, false, '1 iron ingot', 'umbaric spear')
    console.log(umbSpr);
    document.getElementById("name2").innerHTML = umbSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + umbSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + umbSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + umbSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + umbSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + umbSpr.price;
  }
  if (inputTwo.toLowerCase()=='umbaric poleaxe'){
    umbPlx = new Weapon(7.5, .68, 1.5, false, '3 iron ingots', 'umbaric poleaxe')
    console.log(umbPlx);
    document.getElementById("name2").innerHTML = umbPlx.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + umbPlx.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + umbPlx.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + umbPlx.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + umbPlx.kb;
    document.getElementById("price2").innerHTML = 'price: ' + umbPlx.price;
  }
  if (inputTwo.toLowerCase()=='umbaric mace'){
    umbMac = new Weapon(10.5, .65, 1, true, '4 iron ingots', 'umbaric mace')
    console.log(umbMac);
    document.getElementById("name2").innerHTML = umbMac.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + umbMac.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + umbMac.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + umbMac.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + umbMac.kb;
    document.getElementById("price2").innerHTML = 'price: ' + umbMac.price;
  }
  if (inputTwo.toLowerCase()=='umbaric pike'){
    umbPk = new Weapon(7.5, .5, 2, false, '2 iron ingots', 'umbaric pike')
    console.log(umbPk);
    document.getElementById("name2").innerHTML = umbpk.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + umbpk.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + umbpk.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + umbpk.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + umbpk.kb;
    document.getElementById("price2").innerHTML = 'price: ' + umbpk.price;
  }
  if (inputTwo.toLowerCase()=='wood-elven dagger'){
    weDag = new Weapon(5, 1.5, .75, false, '1 elven steel ingot', 'wood-elven dagger')
    console.log(weDag);
    document.getElementById("name2").innerHTML = weDag.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + weDag.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + weDag.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + weDag.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + weDag.kb;
    document.getElementById("price2").innerHTML = 'price: ' + weDag.price;
  }
  if (inputTwo.toLowerCase()=='wood-elven sword'){
    weSrd = new Weapon(8, 1, 1, false, '2 elven steel ingots', 'wood-elven sword')
    console.log(weSrd);
    document.getElementById("name2").innerHTML = weSrd.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + weSrd.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + weSrd.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + weSrd.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + weSrd.kb;
    document.getElementById("price2").innerHTML = 'price: ' + weSrd.price;
  }
  if (inputTwo.toLowerCase()=='wood-elven spear'){
    weSpr = new Weapon(7, .83, 1.5, false, '1 elven steel ingot', 'wood-elven spear')
    console.log(weSpr);
    document.getElementById("name2").innerHTML = weSpr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + weSpr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + weSpr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + weSpr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + weSpr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + weSpr.price;
  }
  if (inputTwo.toLowerCase()=='wood-elven battlestaff'){
    weBat = new Weapon(8, .68, 1.5, false, '2 elven steel ingots', 'wood-elven battlestaff')
    console.log(weBat);
    document.getElementById("name2").innerHTML = weBat.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + weBat.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + weBat.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + weBat.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + weBat.kb;
    document.getElementById("price2").innerHTML = 'price: ' + weBat.price;
  }
  if (inputTwo.toLowerCase()=='wood-elven longspear'){
    weLspr = new Weapon(8, .5, 2, false, '2 elven ingots', 'wood-elven longspear')
    console.log(weLspr);
    document.getElementById("name2").innerHTML = weLspr.id;
    document.getElementById("dmg2").innerHTML = 'damage: ' + weLspr.dmg;
    document.getElementById("reach2").innerHTML = 'reach: ' + weLspr.reach;
    document.getElementById("speed2").innerHTML = 'speed: ' + weLspr.speed;
    document.getElementById("kb2").innerHTML = 'kickback: ' + weLspr.kb;
    document.getElementById("price2").innerHTML = 'price: ' + weLspr.price;
  }

  }
  // if (inputTwo.toLowerCase()==''){
  //   name = new Weapon()
  //   console.log(name);
  // }
