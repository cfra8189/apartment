import '../../components/TestComp/TestComp.css';

function TestComp() {

    return (
        <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-600 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
 
  <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" />
  <div>
    <div class="text-xl text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
    );
}

export default TestComp;