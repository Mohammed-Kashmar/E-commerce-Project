import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import Pagination from '../../components/Utility/Pagination'
import ViewProductAdminHook from '../../hook/admin/view-product-admin-hook'
import { useDispatch } from 'react-redux'
 
const AdminAllProductsPage = () => {
    const dispatch = useDispatch();

    const [items , pagination, onPress] = ViewProductAdminHook();

    if(pagination)
        var pageCount=pagination
    else
        pageCount= 0 

        
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={items}/>
                    {
                        pageCount>1?(<Pagination pageCount={pageCount} onPress={onPress}/>):null
                     }
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage


