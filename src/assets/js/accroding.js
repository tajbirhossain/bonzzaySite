const accrodionItems = document.querySelectorAll(".accrodionItem");

accrodionItems.forEach((item, i) => {
    let isOpen = false;

    const accordionHeading = item.querySelector(".accordionHeading");
    const accordionDesc = item.querySelector(".accordionDesc");
    const accordionOpenSignImg = accordionHeading.querySelectorAll(".accordionOpenSign img");

    requestAnimationFrame(() => {
        item.style.height = `${accordionHeading.clientHeight + 48}px`;
    });

    accordionOpenSignImg[0].style.display = 'block';
    accordionOpenSignImg[1].style.display = 'none';

    accordionHeading.addEventListener("click", () => {
        if (isOpen) {
            item.style.height = `${accordionHeading.clientHeight + 48}px`;
            accordionOpenSignImg[0].style.display = 'block';
            accordionOpenSignImg[1].style.display = 'none';
            isOpen = false;
        } else {
            item.style.height = `${accordionHeading.clientHeight + accordionDesc.clientHeight + 20 + 48}px`;
            accordionOpenSignImg[0].style.display = 'none';
            accordionOpenSignImg[1].style.display = 'block';
            isOpen = true;
        }
    });
});
