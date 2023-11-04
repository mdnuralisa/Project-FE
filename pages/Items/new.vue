<template>
    <div class="ms-3">
        <div class="position-relative d-block my-3">
            <h1 class="d-inline">Add New Item Name</h1>
        </div>
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="name">
            </div>
            
            <div class="mb-3">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="number" class="form-control" id="quantity">
            </div>
            
            <div class="mb-3">
                <label for="name" class="form-label">Unit</label>
                <select class="form-select mb-3" aria-label="Large select example">
                    <option selected>Open this select unit</option>
                    <option value="1">pcs</option>
                    <option value="2">kg</option>
                    <option value="3">L</option>
                </select>
                
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>