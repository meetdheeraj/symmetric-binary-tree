function isSymmetric(root) {
    return isEqual(reverseBinaryTree(root.left), root.right);
}

function isEqual(left, right) {
    if (left == null && right == null) {
        return true;
    }

    if (left == null || right == null) {
        return false;
    }

    return isEqual(left.left, right.left) && isEqual(left.right, right.right);
}

function reverseBinaryTree(root) {
    if (root == null) {
        return;
    }

    let temp = root.left;
    root.left = reverseBinaryTree(root.right);
    root.right = reverseBinaryTree(temp);
    return root;
}