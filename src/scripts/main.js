console.log("We are linked")

const newName = document.querySelector(".article__header")
console.log(newName)
newName.textContent = "Welcome to the Trey blog"

const allArticleHeader = document.querySelectorAll(".article__header")
console.log(allArticleHeader)

for (let i = 0; i < allArticleHeader.length; i++) {
    allArticleHeader[i].classList.add("important")
}

console.log("This should have class important added", allArticleHeader)

const removeDashed = document.querySelector(".dashed")
console.log("This is dashed", removeDashed)
removeDashed.classList.remove("dashed")
console.log("This should have dashed removed", removeDashed)

const addGoldenRod = document.querySelector(".article__footer")
addGoldenRod.classList.add("goldenrod")
console.log("This should have goldenrod added", addGoldenRod)