/*
export default function() {
    return (<div>xman</div>)
}
    */

import {defineComponent, ref} from 'vue'

// v-show ok
// ref -> .value
// v-if unsupported -> ternary cond
// v-for -> map
// v-bind {}
// props emit

interface Props {
    name?:string
}
export default defineComponent({
    props:{
        name:String
    },
    emits:['on-click'],
    setup(props:Props) {
        const flag = ref(false) // in tsx must read with .value
        const data = [
            {
                name:"aa"
            },
            {
                name:"bb"
            },
            {
                name:"cc"
            }
        ]
        return () => (<>
            <h1>TSX</h1>
            <div>{flag.value ? <div>true</div> : <div>false</div> }</div>
            {data.map(v=>{
                return <div class={v.name}>{v.name}</div>
            })}
            <div>props: {props?.name}</div>
            <hr/>
        </>)
    }
})