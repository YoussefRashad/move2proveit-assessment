import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { ProductContext } from '../context/Products'

const columns = [
    { id: 'brand', label: 'Brand', minWidth: 50 },
    { id: 'model', label: 'Model', minWidth: 50 },
    { id: 'year', label: 'Year', minWidth: 50 }
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
    const history = useHistory()
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false)
    const { filteredProducts: products, setSelectedProduct } = React.useContext(ProductContext)

    useEffect(() => {
        setRows([])
    }, [])
    useEffect(() => {
        setRows([])
        setLoading(true)
        let newRows = products.map(product => {
            return { brand: product.brand, model: product.name, year: product.year, id: product.id }
        })
        setRows(prevRows => [...prevRows, ...newRows])
        setLoading(false)
    }, [products])


    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if (loading) {
        return <h2>loading ...</h2>
    }

    return (
        <Paper className={classes.root}>

            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} onClick={
                                                () =>{
                                                    console.log(row.id)
                                                    setSelectedProduct(row.id)
                                                    history.push('/product')
                                                }
                                            }>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />

        </Paper>
    );
}