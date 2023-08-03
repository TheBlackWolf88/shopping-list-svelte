<div class="bg-black/90 h-screen w-screen">
    <div class="border-white/20 border-4">
        <h1 class="pb-5 font-bold text-3xl text-white pl-5 pt-5">Shopping List</h1>
    </div>
    <ul>
       {#each $list as item }
        <li>{item.name} {item.count}</li>
       {/each} 
    </ul> 
    

    <button on:click={showModal} class="bg-green-200">Click</button>
</div>

{#if addModal}
<div class="fixed inset-0 backdrop-blur-md overflow-y-auto align-middle h-screen w-screen">
    <div class="fixed top-0 bottom-0 left-0 right-0 m-auto bg-black/50 h-fit w-fit flex justify-center p-4" aria-hidden="true">
        <ul>
            <form class="h-fit" on:submit|preventDefault={() => addItemToList(testItem)}>
                <li><input type="text" class="h-8 bg-zinc-900 mb-4" bind:value={testItem.name}></li>
                <li><input type="text" class="h-8 bg-zinc-900 mb-4" bind:value={testItem.count}></li>
                <li class="flex justify-center align-middle"><button class="bg-blue-500">Add to list</button></li>
            </form>
        </ul>
    </div> 
</div>
{/if}

<script lang="ts">
    import { writable, type Writable } from "svelte/store";

    interface Item {
        id: number,
        name: string,
        count: number
    }
    
    let addModal = false
    
    const showModal = () => addModal=true

    const list:Writable<Item[]> = writable([])

    let testItem:Item = {
        name:"",
        count:0,
        id: $list.length > 0 ? $list[$list.length-1].id + 1 : 0 
        }

    const addItemToList = (item:Item) => {
        console.log(...$list)
        console.log(item)
        let temp = item
        $list = [...$list, temp]
        addModal=false
    }

</script>
