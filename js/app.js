const archiveList= [
    {
        from: "Rubi Lamichanne",
        to: ["Pablo-Diego-José-Francisc..."],
        sub: "[info:888] ABC EQUIPMENT COMPANY",
        date: "2019/01/01",
        canCopy: false,
        id: 12,
    },
    {
        from: "bbb.bbbb@example.com",
        to: ["yyy@example.com"],
        sub: "[web:333] \"Web Contact\"",
        date: "0:10",
        canCopy: false,
        id: 2,
    },
    {
        from: "aaa@example.com",
        to: ["zzz.zzz@example.com"],
        sub: "[ HR-888 ] Notice of official announcement",
        date: "0:20",
        canCopy: false,
        id: 1,
    },
    {
        from: "ccc@example.com",
        to: ["xxx@example.com", "yyy@example.com"],
        sub: "Happy New Year! Greetings for the New Year.",
        date: "0:00",
        canCopy: true,
        id: 3,
    },
    {
        from: "ddd.dddd@example.com",
        to: ["vvv.vvv@example.com", "www@example.com"],
        sub: "[HR-887(Revised: Office Expansion Project Team)] Notice of off...",
        date: "2020/01/01",
        canCopy: false,
        id: 4,
    },
    {
        from: "eee@example.com",
        to: ["sss@example.com", "ttt@example.com", "mmm@example.com"],
        sub: "[Github] Logout page\n",
        date: "2020/01/01",
        canCopy: false,
        id: 5,
    },
    {
        from: "fff.ffff@example.com",
        to: ["qqq.qqq@example.com", "ttt@example.com", "mmm@example.com"],
        sub: "[dev] Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
        date: "2020/01/01",
        canCopy: false,
        id: 6,
    },
    {
        from: "ggg@example.com",
        to: ["ppp@example.com"],
        sub: "Re: [Github] Brush-up on loading animation ",
        date: "2020/01/01",
        canCopy: false,
        id: 7,
    },
    {
        from: "hhh.hhh@example.com",
        to: ["ooo.ooo@example.com"],
        sub: "Workplace Summary for sample, Inc.: Jun 2 - Jun 9",
        date: "2020/01/01",
        canCopy: true,
        id: 8,
    },
    {
        from: "iii@example.com",
        to: ["nnn@example.com"],
        sub: "I love you",
        date: "2019/12/31",
        canCopy: true,
        id: 9,
    },
    {

        from: "Pablo-Diego-",
        to: ["Pablo-Diego-José-Francisc..."],
        sub: "[info:888] ABC EQUIPMENT COMPANY",
        date: "2019/12/31",
        canCopy: false,
        id: 10,
    },
    {
        from: "Sandesh Sapkota",
        to: ["Pablo-Diego-José-Francisc..."],
        sub: "[info:888] ABC EQUIPMENT COMPANY",
        date: "2019/06/19",
        canCopy: false,
        id: 11,
    },

]

function handleSort(arr, sortBy = "id", order) {
    console.log(sortBy)
    if (order) {
        return arr.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
    }
    return arr.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
}

function handleClass(node, className, action = "add") {
    node.classList[action](className)
}

function initialize() {

    const searchResultText = document.querySelector(".search-result-txt")
    const table = document.querySelector(".c-table")

    searchResultText.innerHTML = `Results: ${`<span class="mx-1">${archiveList.length}</span>`}mail${archiveList.length >
    1 ? "s" : ``}`

    if (table) {
        const tableBody = table.querySelector(".c-table__body")
        let sortedArchiveList = handleSort(archiveList, "date", true)
        let sortingTriggerElms = [...document.querySelectorAll("[data-sort-by]")]

        // handling event listener to table head
        // that sorts

        sortingTriggerElms.map(sortingTriggerElm => {
            const sortBy = sortingTriggerElm.dataset.sortBy
            sortingTriggerElm.addEventListener("click", function() {
                sortedArchiveList = handleSort(archiveList, sortBy)
                updateResult(sortedArchiveList, tableBody)
            })

            handleClass(sortingTriggerElm, "cursor-pointer")
        })

        // updating the table body initially
        updateResult(sortedArchiveList, tableBody)
    }

    function updateResult(sortedArchiveList, tableBody) {
        let str = ""
        sortedArchiveList.map((obj, index) => {
            str = str +
                `<div class="c-table__row">
                   <div class="c-table__td w-1/5">${obj.from}</div>
                   <div class="c-table__td w-1/4 flex items-center justify-between">
                      ${obj.to[0]}
                      ${obj.to.length > 1 ? `<span class="label">${obj.to.length - 1}</span>` : ""}
                   </div>
                   <div class="c-table__td w-1/2 ">
                      ${obj.sub}
                   </div>
                   <div class="c-table__td w-1/10 flex items-center justify-between">
                      ${obj.canCopy ?
                    `
                      <span class="c-table__clip-icon">
                         <svg class="w-4 h-4">
                            <use xlink:href="src/img/icons.svg#icon-clipboard" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                         </svg>
                      </span>
                      ` : ""
                }
                      <span>${obj.date}</span> 
                   </div>
                </div>`
        })
        tableBody.innerHTML = str
    }
}

initialize()
