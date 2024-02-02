export let sentence = "Lorembgt12"

export let allCondtions = (sentence) => {
    if (isNaN(sentence) && sentence.includes('o') && sentence.length == 8) {
        return ('all conditions have been met')
    }else{
        return 'error'
    }
}


