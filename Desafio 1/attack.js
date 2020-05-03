/** @typedef { 'electric' | 'water' | 'normal' | 'fighting' } Type */

class Attack {
	/**
		@argument { string } name
		@argument { number } damage
		@argument { number } accuracy
		@argument { Type } type
	*/
	constructor (name, damage, accuracy, type, paralysisChance = 0) {
		this.name = name;
		this.damage = damage;
		this.accuracy = accuracy;
		this.type = type;
		this.paralysisChance = paralysisChance;
	}

	willMiss () {
		return Math.random() * 100 >= this.accuracy;
	}

	willBeSuperEffective (targetType) {
		if (this.type === 'electric' && targetType === 'water') return true;
		return false;
	}

	willParalyse () {
		return Math.random() * 100 <= this.paralysisChance;
	}
}