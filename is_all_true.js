function isAllTrue(source,filterFn){
	try{
		if (source.length == 0){
			throw new Error('Передан пустой массив!')
		}
		for (let i = 0; i < source.length; i++){
			if (!filterFn(source[i])) return false
		}
		return true
	}
	catch(e){
		console.error(e.message)
	}
}

module.exports = isAllTrue;