export default {
  beforeMount(el) {
    // Create button background element
    const bgDiv = document.createElement('div');
    bgDiv.classList.add(
      'group-hover:opacity-100',
      'absolute',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'button-bg',
      'border',
      'border-[#c3a9a0]',
      'opacity-0',
      'ease-in-out',
      'duration-100'
    );
    bgDiv.innerHTML = `
      <div class="absolute left-[-5px] top-[-5px] w-[16px] h-[16px] bg-[#c3a9a0] rounded-br-[12px]"></div>
      <div class="absolute right-[-5px] top-[-5px] w-[16px] h-[16px] bg-[#c3a9a0] rounded-bl-[12px]"></div>
      <div class="absolute left-[-5px] bottom-[-5px] w-[16px] h-[16px] bg-[#c3a9a0] rounded-tr-[12px]"></div>
      <div class="absolute right-[-5px] bottom-[-5px] w-[16px] h-[16px] bg-[#c3a9a0] rounded-tl-[12px]"></div>
      <div class="flex flex-col justify-between absolute top-0 left-0 px-[16px] py-[2px] w-full h-full">
        <div class="w-full h-[1px] bg-[#c3a9a0]"></div>
        <div class="w-full h-[1px] bg-[#c3a9a0]"></div>
      </div>
      <div class="flex flex-row justify-between absolute top-0 left-0 py-[14px] px-[2px] w-full h-full">
        <div class="h-full w-[1px] bg-[#c3a9a0]"></div>
        <div class="h-full w-[1px] bg-[#c3a9a0]"></div>
      </div>
    `;
    // Add class and insert background element
    el.classList.add('group', 'relative', 'cursor-pointer');
    el.prepend(bgDiv);
  }
};
