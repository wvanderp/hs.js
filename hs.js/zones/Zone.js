class Zone{
    constructor(){
		this.contents = new array();
		this.maxSlots = 0;
    }

    isFull(){
        if(this.contents.length >= this.maxSlots){
            return true;
        }else{
            return false;
        }
    }
}