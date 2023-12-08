async function populate() {
	const requestURL =
		"https://raw.githubusercontent.com/basbydesign/JSON-Load-Tests-Spells-/main/JSON%20Load%20Test.json?_sm_au_=iVVKSkDS9sFWNHLDVc3KjK0BkWQp0";
  	const request = new Request(requestURL);

  	const response = await fetch(request);
  	const spellList = await response.json();

  	populateHeader(spellList);
 	populateSpells(spellList);
}

function populateHeader(obj) {
  	const header = document.querySelector("header");
  	const myH1 = document.createElement("h1");
  	myH1.textContent = obj.listPurpose;
  	header.appendChild(myH1);

  	const myPara = document.createElement("p");
  	myPara.textContent = `Sheet Totals: ${obj.spellSort} // Formed: ${obj.spellTotal}`;
  	header.appendChild(myPara);
}

function populateSpells(obj) {
  	const section = document.querySelector("section");
  	const spells = obj.spellName;

  	for (const spell of spells) {
    	const spellBox = document.createElement("article");
		spellBox.classList.add("spellBox");
    	const spellName = document.createElement("h4"); /*Spell Name*/
		spellName.classList.add("spellName");
    	const spellSource = document.createElement("h4"); /*Source*/
		spellSource.classList.add("spellSource");
    	const spellSchool = document.createElement("p"); /*School*/
		spellSchool.classList.add("spellSchool");
    	const spellCastingTime = document.createElement("p"); /*Casting Time*/
		spellCastingTime.classList.add("spellCastingTime");
   	const spellRange = document.createElement("p"); /*Range*/
		spellRange.classList.add("spellRange");
    	const spellDuration = document.createElement("p"); /*Duration*/
		spellDuration.classList.add("spellDuration");
    	const spellRitual = document.createElement("p"); /*Ritual*/
		spellRitual.classList.add("spellRitual");
    	const spellComponents = document.createElement("p"); /*Verbal/Somatic/Material*/
		spellComponents.classList.add("spellComponents");
    	const spellMaterials = document.createElement("p"); /*Materials*/
		spellMaterials.classList.add("spellMaterials");
    	const spellDescription = document.createElement("p"); /*Description*/
		spellDescription.classList.add("spellDescription");
    	const spellCasterList = document.createElement("ul"); /*Spell List*/
		spellCasterList.classList.add("spellCasterList");
	const Verbal = spell.verbal;
	const Somatic = spell.somatic;
	const Material = spell.material;

	if (spell.ritual) {
	    	spellName.textContent = spell.name + " (Ritual)";
	}
	else {
		spellName.textContent = spell.name;
	}
    	spellSource.textContent = spell.source;
	if (spell.level < 1) {
    	spellSchool.textContent = spell.school + " Cantrip";
	}
	if (spell.level == 1) {
    	spellSchool.textContent = spell.level + "st Level " + spell.school;
	}
	if (spell.level == 2) {
    	spellSchool.textContent = spell.level + "nd Level " + spell.school;
	}
	if (spell.level == 3) {
    	spellSchool.textContent = spell.level + "rd Level " + spell.school;
	}
	if (spell.level > 3) {
    	spellSchool.textContent = spell.level + "th Level " + spell.school;
	}

    	spellCastingTime.textContent = `Casting Time: ${spell.castingtime}`;
    	spellRange.textContent = `Range: ${spell.range}`;
   	spellDuration.textContent = `Duration: ${spell.duration}`;
    	/*spellRitual.textContent = `Ritual: ${spell.ritual}`;*/

    	spellComponents.textContent = `Components: ${spell.components}`;

    	spellMaterials.textContent = `Materials: ${spell.materials}`;
    	spellDescription.textContent = `Description: ${spell.description}`;

    	const magicSchool = spell.spelllist;
    	for (const school of magicSchool) {
      		const listItem = document.createElement("li");
      		listItem.textContent = school;
		spellCasterList.appendChild(listItem);
   	}
	spellBox.appendChild(spellName);
    	spellBox.appendChild(spellCastingTime);
    	spellBox.appendChild(spellRange);
    	spellBox.appendChild(spellDuration);
    	spellBox.appendChild(spellComponents);
    	spellBox.appendChild(spellMaterials);
    	spellBox.appendChild(spellDescription);
    	spellBox.appendChild(spellSchool);

    	section.appendChild(spellBox);
  	}
}
populate();
