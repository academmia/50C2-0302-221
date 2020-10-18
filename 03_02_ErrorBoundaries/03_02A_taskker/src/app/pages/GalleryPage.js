
import React from 'react';
import AppLayout from '../../shared/layout/AppLayout';

const GalleryPage = (props) => {

    return (
        <AppLayout>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title"> Gallery </h1>
                        <div className="page-subtitle"> Error boundary </div>
                    </div>
                    <div className="row row-cards">
                        <div className="col-sm-6 col-lg-4">
                            <div className="card p-3">
                            <a href="/" className="mb-3">
                                <img src={"images/photos/grant-ritchie-338179-500.jpg"} alt="by Nathan Guerrero" className="rounded" />
                            </a>
                            <div className="d-flex align-items-center px-2">
                                <div>
                                    <div>Nathan Guerrero</div>
                                </div>
                                <div className="ml-auto text-muted">
                                    <a href="/" className="icon"><i className="fe fe-eye mr-1"></i> 112</a>
                                    <a href="/" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i> 42</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default GalleryPage;

