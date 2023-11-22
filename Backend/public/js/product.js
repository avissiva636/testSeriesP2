let productList = [
    {
        mainProduct: "KAS Mains notes",
        subProducts: [
            { name: "Subproduct 1", link: "wrotea" },
            { name: "Subproduct 2", link: "wroteb" },
            { name: "Subproduct 3", link: "wrotec" },
        ],
    },
    {
        mainProduct: "KAS Prelims notes",
        subProducts: [
            { name: "Subproduct A", link: "dheara" },
            { name: "Subproduct B", link: "dhearb" },
            { name: "Subproduct C", link: "dhearc" },
        ],
    },
    {
        mainProduct: "Current affairs magazines",
        subProducts: [
            { name: "Subproduct X", link: "goodlea" },
            { name: "Subproduct Y", link: "goodleb" },
            { name: "Subproduct Z", link: "goodlec" },
        ],
    },
    {
        mainProduct: "SAAD Material",
        subProducts: [
            { name: "Subproduct I", link: "youtubea" },
            { name: "Subproduct II", link: "youtubeb" },
            { name: "Subproduct III", link: "youtubec" },
        ],
    },
    {
        mainProduct: "KPSC Group C Material",
        subProducts: [
            { name: "Subproduct Alpha", link: "gmaila" },
            { name: "Subproduct Beta", link: "gmailb" },
            { name: "Subproduct Gama", link: "gmailc" },
        ],
    },
    {
        mainProduct: "PSI/ ESI Material",
        subProducts: [
            { name: "Subproduct 4", link: "checka" },
            { name: "Subproduct 5", link: "checkb" },
            { name: "Subproduct 6", link: "checkc" },
        ],
    },
    {
        mainProduct: "FDA & SDA Material",
        subProducts: [
            { name: "Subproduct 11", link: "materiala" },
            { name: "Subproduct 12", link: "materialb" },
            { name: "Subproduct 13", link: "materialc" },
        ],
    },
];


function addProductTodo() {
    // Get values from input fields
    var subProductName = document.getElementById("subProductName").value;
    var subProductLink = document.getElementById("subProductLink").value;
    var ProductUlList = document.getElementById("ProductUlList");

    var subTitleElement = document.createElement("li");
    subTitleElement.innerHTML = `<p id="${subProductName}" data-title="${subProductName}" data-description='${subProductLink}'  onclick="editProduct(this)"><strong> ${subProductName} </strong></p> `;
    ProductUlList.appendChild(subTitleElement);

    // Clear input fields
    document.getElementById("subProductName").value = "";
    document.getElementById("subProductLink").value = "";


    toggleVisibility('noSubtitle', 'addProductVisiblity')
}

const editProduct = (elementToRemove) => {

    const title = elementToRemove.getAttribute('data-title');
    const description = elementToRemove.getAttribute('data-description');

    const ProductUlList = document.getElementById("ProductUlList");

    ProductUlList.removeChild(elementToRemove.parentNode);

    const updatesubProductName = document.getElementById("subProductName");
    const updatesubProductLink = document.getElementById("subProductLink");

    updatesubProductName.value = title;

    updatesubProductLink.value = description;

    toggleVisibility('yesSubtitle', 'addProductVisiblity')

}

function handleUpdateProduct() {
    var updateProductSelect = document.getElementById('updateProduct');
    originalSubTitleName = updateProductSelect.value;
    var selectedProduct = updateProductSelect.options[updateProductSelect.selectedIndex];

    var subproductSelect = document.getElementById('updateSubProduct');
    subproductSelect.innerHTML = ''; // Clear existing options
    subproductSelect.innerHTML += '<option value="" selected disabled> Select Prdoduct </option>';

    // Find the selected product in productList
    var selectedProductData = productList.find(function (prodcut) {
        return prodcut.mainProduct === selectedProduct.value;
    });
    // Assuming selectedProductData is the object mentioned above

    toggleVisibility("yesSubtitle", "updateSubProductVisiblity");



    if (selectedProductData) {
        selectedProductData.subProducts.forEach(function (subproduct) {
            addSubProductOption(subproduct);
        });
    }

}

function addSubProductOption(subproduct) {
    var subproductSelect = document.getElementById('updateSubProduct');
    var newOption = document.createElement('option');
    newOption.value = subproduct.name;
    newOption.text = subproduct.name;
    subproductSelect.appendChild(newOption);
}

var originalSubProductName;
function handleSubProductSelection() {
    toggleVisibility("noSubtitle", "updateSelectProduct");
    var selectedProduct = document.getElementById('updateProduct');
    var subproductSelect = document.getElementById('updateSubProduct');
    originalSubProductName = subproductSelect.value;
    var selectedOption = subproductSelect.options[subproductSelect.selectedIndex];

    toggleVisibility("yesSubtitle", "updateSelectProduct", "upAddSubtDescVisiblity");
    var updatesubProductName = document.getElementById("updatesubProductName");
    var updatesubProductLink = document.getElementById("updatesubProductLink");

    //getting descrition from productList
    var selectedLink = productList
        .find(product => product.mainProduct === selectedProduct.value)
        ?.subProducts
        .find(subproduct => subproduct.name === selectedOption.value)
        ?.link;

    //setting value
    updatesubProductName.value = selectedOption.value;
    updatesubProductLink.value = selectedLink;
}

function updateSubProductList() {
    var selectedProduct = document.getElementById('updateProduct');
    var updateSubProduct = document.getElementById("updatesubProductName");
    var updatesubProductLink = document.getElementById("updatesubProductLink");
    // var updateQuillEditorSub = quillUp.getContents();

    console.log(updateSubProduct.value, updatesubProductLink.value)
    productList = productList.map(product => {
        if (product.mainProduct === selectedProduct.value) {
            product.subProducts = product.subProducts.map(subproduct => {
                if (subproduct.name === originalSubProductName) {
                    return { name: updateSubProduct.value, link: updatesubProductLink.value };
                }
                return subproduct;
            });
        }
        return product;
    });

    updateSubProduct.value = "";
    updatesubProductLink.value = ""
    toggleVisibility("noSubtitle", "updateSelectProduct");

    //immediately update dropdown 
    // updateProduct related function
    handleUpdateProduct();

}

function updateAddSubTitle() {
    var selectedProduct = document.getElementById('updateProduct');
    var upAddSubProductName = document.getElementById("upAddSubProductName");
    var upAddSubProductLink = document.getElementById("upAddSubProductLink");

    // Find the target product in ProductList
    var targetProduct = productList.find(product => product.mainProduct === selectedProduct.value);
    targetProduct.subProducts.push({ name: upAddSubProductName.value, link: upAddSubProductLink.value });

    addSubProductOption({ name: upAddSubProductName.value, link: upAddSubProductLink.value })

    // Clear input fields
    upAddSubProductName.value = "";
    upAddSubProductLink.value = "";

    toggleVisibility('noSubtitle', 'upAddSubtDescVisiblity')
}

function deleteProduct() {
    var deleteProductSelect = document.getElementById('deleteProduct');

    var deleteSubproductSelect = document.getElementById('deletesubproduct');
    var selectedValues = Array.from(deleteSubproductSelect.selectedOptions).map(option => option.value);

    if ((selectedValues.length === 1 && selectedValues[0] === '') || selectedValues.length === 0) {
        // Get the index of the currently selected option
        var selectedIndex = deleteProductSelect.selectedIndex;

        if (selectedIndex !== -1) {
            // Remove the currently selected option
            deleteProductSelect.remove(selectedIndex);
        }
        deleteProductList(deleteProductSelect.selectedIndex - 1)
        return;
    }

    selectedValues.forEach(function (value) {
        var optionToRemove = deleteSubproductSelect.querySelector('option[value="' + value + '"]');

        if (optionToRemove) {
            // Remove the option
            optionToRemove.remove();
        }
        toggleVisibility("noSubtitle", "deletesubproductVisiblity");
    });
    deleteProductList(deleteProductSelect.selectedIndex - 1, selectedValues);

}

function deleteProductList(productIndex, selectedValues) {
    if (selectedValues === null || selectedValues === undefined) {
        productList.splice(productIndex, 1)
        return
    }

    if (productIndex !== -1) {
        // Iterate over selectedValues
        selectedValues.forEach(subProductToRemove => {
            // Find the index of the subTitle in SubTitle array
            var subProductIndex = productList[productIndex]?.subProducts.findIndex(subProduct => subProduct.name === subProductToRemove);

            // Check if the subTitle exists
            if (subProductIndex !== -1) {
                productList[productIndex].subProducts.splice(subProductIndex, 1);
            }
        });
    }
}

function handleDeleteProduct() {

    var deleteproductSelect = document.getElementById('deleteProduct');

    var selectedProduct = deleteproductSelect.value;
    var subproductSelect = document.getElementById('deletesubproduct');
    subproductSelect.innerHTML = ''; // Clear existing options
    // subproductSelect.innerHTML += '<option value="" selected disabled> Select Course </option>';

    // Find the selected product in ProductList
    var selectedProductData = productList.find(function (product) {
        return product.mainProduct === selectedProduct;
    });
    console.log(selectedProduct,selectedProductData)
    // Assuming selectedProductData is the object mentioned above

    if (selectedProductData && selectedProductData.subProducts && selectedProductData.subProducts.length > 0) {
        toggleVisibility("yesSubtitle", "deletesubproductVisiblity");
    } else {
        toggleVisibility("noSubtitle", "deletesubproductVisiblity");
    }

    // Add options based on the selected product's subproduct
    if (selectedProductData && selectedProductData.subProducts) {
        selectedProductData.subProducts.forEach(function (subproduct) {
            // var deleteproductSelect = document.getElementById('deletesubproduct');
            var newOption = document.createElement('option');
            newOption.value = subproduct.name;
            newOption.text = subproduct.name;
            subproductSelect.appendChild(newOption);
        });
    }

}