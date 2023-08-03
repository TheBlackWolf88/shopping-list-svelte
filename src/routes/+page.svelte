<div class="bg-black/90 h-screen w-screen">
    <div class="border-white/20 border-4">
        <h1 class="pb-5 font-bold text-3xl text-white pl-5 pt-5">Shopping List</h1>
    </div>
    <ul>
       {#each list as item }
        <li class="text-white font-semibold border-2 border-white/30 text-2xl pl-4 py-2 {item.isCompleted ? 'text-green-400' : ''}" on:click={() => {changeStatus(item)}}>{item.count} {item.name}</li>
       {/each} 
    </ul> 
    

    <button on:click={showModal} class="bg-green-200 fixed bottom-4 right-4 p-4 rounded-md">Add</button>
</div>

{#if addModal}
<div class="fixed inset-0 backdrop-blur-md overflow-y-auto align-middle h-screen w-screen">
    <div class="fixed top-0 bottom-0 left-0 right-0 m-auto bg-black/50 h-fit w-fit flex justify-center p-20 rounded-md" aria-hidden="true">
        <ul>
            <form class="h-fit" on:submit|preventDefault={addItemToList}>
                <li><input type="text" class="h-14 rounded-2xl bg-zinc-900 pl-2 mb-4 text-white" bind:value={testItem.name}></li>
                <li><input type="text" class="h-14 rounded-2xl bg-zinc-900 pl-2 mb-4 text-white" bind:value={testItem.count}></li>
                <li class="flex justify-center align-middle"><button class="bg-blue-500 p-4 rounded-md" type="submit">Add to list</button></li>
            </form>
        </ul>
    </div> 
</div>
{/if}

<script lang="ts">
    type Item = {
        id: number,
        name: string,
        count: number,
        isCompleted: boolean
    }
    
    let addModal = false
    
    const showModal = () => addModal=true

    let list:Item[] = [{name: "eggs", count: 12, id:0, isCompleted: false}]

    let testItem:Item = {
        name:"",
        count:1,
        id: list.length > 0 ? list[list.length-1].id + 1 : 0,
        isCompleted:false
    }
    
    const changeStatus = (item:Item) => {
        const index = list.findIndex((i) => i.id == item.id)
        list[index].isCompleted = !list[index].isCompleted
    }
    

    const addItemToList = () => {
        const data = {...testItem}
        list.push(data)
        list = list
        addModal=false
        testItem = {
            name:"",
            count:0,
            id: list.length > 0 ? list[list.length-1].id + 1 : 0,
            isCompleted:false
        }
        
    }

</script>
