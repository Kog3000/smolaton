document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.block');

    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;

        blocks.forEach(block = & gt; {
            let blockPosition = block.getBoundingClientRect().top;

            if (blockPosition & lt; windowHeight - 100) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }

    checkBlocksVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });
});