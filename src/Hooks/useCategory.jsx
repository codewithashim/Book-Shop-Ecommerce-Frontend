import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { getAllCategoryPaginationUrl } from "../Utils/Urls/BooksUrl";

const useCategory = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(9);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCategories, setTotalCategories] = useState(0);
    const [categoriesData, setCategories] = useState([]);
    const [isLoadingCategory, setIsLoadingCategory] = useState(false);

    const fetchCategories = async (shouldRefresh = false) => {
        try {
            setIsLoadingCategory(true);
            const response = await fetch(
                getAllCategoryPaginationUrl(page, pageSize),
            );
            const data = await response.json();
            setCategories(data.data);
            setTotalCategories(data.totalCategories);
            setTotalPages(data.totalPages);

            setIsLoadingCategory(false);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoadingCategory(false);
        }

        if (shouldRefresh) {
            fetchCategories();
        }
    };

    useEffect(() => {
        fetchCategories();
    }, [page, pageSize]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    return {
        page,
        handlePrevPage,
        totalPages,
        handleNextPage,
        categoriesData,
        totalCategories,
        pageSize,
        setPage,
        isLoadingCategory,
    };
};

export default useCategory;