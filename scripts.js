document.addEventListener("DOMContentLoaded", () => {
    if ($(window).width() < 768) {
        $("h1.sw-font-size-10xl").removeClass("sw-font-size-10xl").addClass("sw-font-size-5xl");
        $("h1.sw-font-size-9xl").removeClass("sw-font-size-9xl").addClass("sw-font-size-5xl");
        $("h1.sw-font-size-8xl").removeClass("sw-font-size-8xl").addClass("sw-font-size-5xl");
        $("h1.sw-font-size-7xl").removeClass("sw-font-size-7xl").addClass("sw-font-size-5xl");
        $("h1.sw-font-size-6xl").removeClass("sw-font-size-6xl").addClass("sw-font-size-4xl");
        $("h2.sw-font-size-10xl").removeClass("sw-font-size-10xl").addClass("sw-font-size-5xl");
        $("h2.sw-font-size-9xl").removeClass("sw-font-size-9xl").addClass("sw-font-size-5xl");
        $("h2.sw-font-size-8xl").removeClass("sw-font-size-8xl").addClass("sw-font-size-5xl");
        $("h2.sw-font-size-7xl").removeClass("sw-font-size-7xl").addClass("sw-font-size-5xl");
        $("h2.sw-font-size-6xl").removeClass("sw-font-size-6xl").addClass("sw-font-size-4xl");
        $("div.sw-font-size-10xl").removeClass("sw-font-size-10xl").addClass("sw-font-size-5xl");
        $("div.sw-font-size-9xl").removeClass("sw-font-size-9xl").addClass("sw-font-size-5xl");
        $("div.sw-font-size-8xl").removeClass("sw-font-size-8xl").addClass("sw-font-size-5xl");
        $("div.sw-font-size-7xl").removeClass("sw-font-size-7xl").addClass("sw-font-size-5xl");
        $("div.sw-font-size-6xl").removeClass("sw-font-size-6xl").addClass("sw-font-size-4xl");
        $("p.sw-font-size-10xl").removeClass("sw-font-size-10xl").addClass("sw-font-size-5xl");
        $("p.sw-font-size-9xl").removeClass("sw-font-size-9xl").addClass("sw-font-size-5xl");
        $("p.sw-font-size-8xl").removeClass("sw-font-size-8xl").addClass("sw-font-size-5xl");
        $("p.sw-font-size-7xl").removeClass("sw-font-size-7xl").addClass("sw-font-size-5xl");
        $("p.sw-font-size-6xl").removeClass("sw-font-size-6xl").addClass("sw-font-size-4xl");
        $("span.sw-font-size-10xl").removeClass("sw-font-size-10xl").addClass("sw-font-size-5xl");
        $("span.sw-font-size-9xl").removeClass("sw-font-size-9xl").addClass("sw-font-size-5xl");
        $("span.sw-font-size-8xl").removeClass("sw-font-size-8xl").addClass("sw-font-size-5xl");
        $("span.sw-font-size-7xl").removeClass("sw-font-size-7xl").addClass("sw-font-size-5xl");
        $("span.sw-font-size-6xl").removeClass("sw-font-size-6xl").addClass("sw-font-size-4xl");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

/** Image lineup on mobile **/
document.addEventListener("DOMContentLoaded", function () {
    function changeImageDirectionsOnMobile() {
        const classListSection = $("body>div>section")?.attr("class")?.split(/\s+/);
        const textClassSection = classListSection?.find((cls) => cls.startsWith("feature"));

        const classListHeader = $("body>div>header")?.attr("class")?.split(/\s+/);
        const textClassHeader = classListHeader?.find((cls) => cls.startsWith("hero"));

        /*If FEATURE block*/
        if (textClassSection) {
            findRowsWidthImageAndReverse(textClassSection);
        }
    
        /*If HERO block*/
        if (textClassHeader) {
            findRowsWidthImageAndReverse(textClassHeader);
        }
    }

    function findRowsWidthImageAndReverse(textClass) {
        const rowsWithImages = $("." + textClass + " .row.align-items-center").has("img").toArray();
        const rowsWithLeftSideImages = rowsWithImages.filter((row) => {
            return( $(row).children().first().children().first().prop("tagName") === "IMG" );
        });
    
        rowsWithLeftSideImages.forEach((row) => {
            if ($(window).width() <= 768) {
                row.classList.add("flex-column-reverse");
            }
        });
    }
    
    if ($(window).width() <= 768) {
        changeImageDirectionsOnMobile();
    }
});

/** BG Size on mobile **/
document.addEventListener("DOMContentLoaded", function () {
    if ($(window).width() <= 768) {
        var element = $("section.sw-background-size-auto, header.sw-background-size-auto");
        element.removeClass("sw-background-size-auto");
        element.css("background-size", "cover");
    
        $("section.sw-background-attachment-fixed, header.sw-background-attachment-fixed").removeClass("sw-background-attachment-fixed");
    }
});

/** Disable zoom on mobile **/
document.addEventListener("DOMContentLoaded", function () {
    if ($(window).width() <= 768) {
        $("input.sw-font-size-s").removeClass("sw-font-size-s");
        $("textarea.sw-font-size-s").removeClass("sw-font-size-s");
        $("select.sw-font-size-s").removeClass("sw-font-size-s");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

/** Scroll to section **/
document.addEventListener("DOMContentLoaded", function () {
    $("a").each(function (index, el) {
        let href = $(el).attr("href");
        let path = cleanSlugFromPath(location.pathname);
        if (href && href.startsWith(path + "#")) {
            const scrollTo = href.split("#")[1];
            $(this).attr("href", "#" + scrollTo);
        }
    });

    function cleanSlugFromPath(pagePath) {
        if (pagePath.includes("/r/rec")) {
            pagePath = pagePath.substring(0, pagePath.indexOf("/r/rec"));
            pagePath = pagePath.substring(0,pagePath.lastIndexOf("index.html"));
        }
    
        return pagePath + (pagePath.endsWith("/") ? "" : "/");
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

/** Bugfix on multiple ?recordId= issue **/
setInterval(function () {
    $("section a").each(function () {
        const href = $(this).attr("href");
        if (href && href.includes("?recordId=")) {
            const countOfRecords = (href.match(/\?recordId=/g) || []).length;
            if (countOfRecords > 1) {
                const index = href.lastIndexOf("?recordId=");
                const cleanedHref = href.substring(0, index);
                $(this).attr("href", cleanedHref);
            }
        }
    });
}, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////

