export default {
  beforeMount(el) {
    // Create button background element
    const bgDiv = document.createElement('div');
    const horLineClasses = 'absolute left-1/2 w-10/12 h-px bg-yellow-900 transform -translate-x-1/2 opacity-30';
    const verLineClasses = 'absolute top-1/2 w-px h-3/4 bg-yellow-900 transform -translate-y-1/2 opacity-30';
    bgDiv.classList.add(
      'group-hover:opacity-100',
      'absolute',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'border',
      'border-yellow-700',
      'rounded-[3px]',
      'overflow-hidden',
      'button-bg',
      'opacity-0',
      'ease-in-out',
      'duration-100'
    );
    bgDiv.innerHTML += `
      <div class="${horLineClasses} top-px"></div>
      <div class="${horLineClasses} bottom-px"></div>
      <div class="${verLineClasses} left-px"></div>
      <div class="${verLineClasses} right-px"></div>
    `;
    // Add class and insert background element
    el.classList.add('group', 'relative');
    el.prepend(bgDiv);
  }
};
