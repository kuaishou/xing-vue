

let activeEffect;
export function effect(fn) {
    const effectFn=()=>{
        try {
            activeEffect=effectFn;
            return fn()
        } finally {
    
        }
    }
    effectFn()
    return effectFn
}

const targetMap=new WeakMap();
export function track(target,key){
    if(!activeEffect){
        return
    }
    let depsMap=targetMap.get(target)
if(!depsMap){
    targetMap.set(target,(depsMap=new Map()))
}


}

export function trigger(){
    

}



