import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientsTableComponent (){

    
    
    return(
        <div className="card shadow">
            <div className="card-header py-3">
                <p className="text-primary m-0 font-weight-bold">Clients Info</p>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 text-nowrap">
                        <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label>Show&nbsp;<select className="form-control form-control-sm custom-select custom-select-sm">
                                    <option value="10" defaultValue="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </select>&nbsp;</label></div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" className="form-control form-control-sm" aria-controls="dataTable" placeholder="Search"/></label></div>
                    </div>
                </div>
                <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                    <table className="table my-0" id="dataTable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>address</th>
                                <th>Start date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar1.jpeg" alt="gg"/>Airi Satou</td>
                                <td>email21@gmail.com</td>
                                <td>Tokyo</td>
                                <td>2008/11/28</td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar2.jpeg" alt='gg'/>Angelica Ramos</td>
                                <td>Chief Executive Officer(CEO)</td>
                                <td>London</td>
                                <td>2009/10/09<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar3.jpeg" alt='gg'/>Ashton Cox</td>
                                <td>Junior Technical Author</td>
                                <td>San Francisco</td>
                                <td>2009/01/12<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar4.jpeg" alt='gg'/>Bradley Greer</td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>2012/10/13<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar5.jpeg" alt='gg' />Brenden Wagner</td>
                                <td>Software Engineer</td>
                                <td>San Francisco</td>
                                <td>2011/06/07<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar1.jpeg" alt='gg'/>Brielle Williamson</td>
                                <td>Integration Specialist</td>
                                <td>New York</td>
                                <td>2012/12/02<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar2.jpeg" alt='gg'/>Bruno Nash<br/></td>
                                <td>Software Engineer</td>
                                <td>London</td>
                                <td>2011/05/03<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar3.jpeg" alt='gg'/>Caesar Vance</td>
                                <td>Pre-Sales Support</td>
                                <td>New York</td>
                                <td>2011/12/12<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar4.jpeg" alt='gg'/>Cara Stevens</td>
                                <td>Sales Assistant</td>
                                <td>New York</td>
                                <td>2011/12/06<br/></td>
                            </tr>
                            <tr>
                                <td><img className="rounded-circle mr-2" style={{width:"30" , height:"30"}} src="/assets/img/avatars/avatar5.jpeg" alt='gg'/>Cedric Kelly</td>
                                <td>Senior JavaScript Developer</td>
                                <td>Edinburgh</td>
                                <td>2012/03/29<br/></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><strong>Name</strong></td>
                                <td><strong>E-mail</strong></td>
                                <td><strong>address</strong></td>
                                <td><strong>Start date</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">Showing 1 to 10 of 27</p>
                    </div>
                    <div className="col-md-6">
                        <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                                <li className="page-item disabled"><Link className="page-link" to="/#" aria-label="Previous"><span aria-hidden="true">&#171;</span></Link></li>
                                <li className="page-item active"><Link className="page-link" to="/#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="/#" aria-label="Next"><span aria-hidden="true">&#188;</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}