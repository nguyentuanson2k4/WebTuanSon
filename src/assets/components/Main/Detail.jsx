import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';

function Detail() {

    const { id } = useParams(); // Lấy ID từ URL
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`https://sjrrlz-8080.csb.app/books/${id}`);
            const json = await response.json();
            setBook(json);
            setLoading(false);
        };
    fetchBooks();
    }, [id]);

    if (loading) {
        return <div>
            <div class="d-flex align-items-center">
                <strong>Loading...</strong>
                <div class="spinner-border ms-2" role="status" aria-hidden="true"></div>
            </div>
        </div>;
    }

    return (
    <>
        <div className='pb-5 mt-2' style={{ backgroundColor: "#f5f5fa"}}>
            <div className='container'>
                <div class="row g-2">
                    <div class="col-md-12 col-lg-4">
                        <div className="border bg-light rounded overflow-hidden">
                            <div className="p-3">
                                    <img className="object-fit-contain" style={{ width: "100%", height: "100%" }} src={book.images[0].base_url}/>
                            </div>
                            <div className="p-3 pb-3">
                                <h6><strong>Đặc điểm nổi bật</strong></h6>
                                <div className='d-flex'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary me-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '14px' }}>Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</span>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary me-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '14px' }}>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.</span>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary me-2" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                        </svg>
                                    </div>
                                    <span style={{ fontSize: '14px' }}>Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các quốc gia.</span>
                                </div>
                            </div>
                            <div className="border-top p-3 d-flex justify-content-between">
                                <div className='d-flex'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-wink-fill text-primary" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5M4.285 9.567a.5.5 0 0 0-.183.683A4.5 4.5 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183m5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007s1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.93.93 0 0 1-.813.493.93.93 0 0 1-.813-.493"/>
                                        </svg>
                                    </div>
                                    <span className='ms-2'><span class="text-secondary">Xem thêm</span> Tóm tắt nội dung sách</span>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right text-secondary" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="mt-2 d-block d-lg-none">
                            <div class="p-3 border bg-light rounded">
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>Số Lượng</div>
                                <div className='my-2'>
                                    <button type="button" class="btn btn-outline-secondary pt-0 px-3" style={{ fontSize: '24px', fontWeight: 600 }}>-</button>
                                    <button type="button" class="btn btn-outline-secondary mx-2 py-1 px-4" style={{ fontSize: '24px', fontWeight: 600, color: 'black' }}>1</button>
                                    <button type="button" class="btn btn-outline-secondary pt-0" style={{ fontSize: '24px', fontWeight: 600 }}>+</button>
                                </div>
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>Tạm tính</div>
                                <div className='d-flex'>
                                    <div style={{ fontSize: '24px', fontWeight: 600 }}>{book.current_seller && book.current_seller.price ? book.current_seller.price.toLocaleString('vi-VN') + '₫' : 'Giá không có'}</div>
                                    <span className='pb-4' style={{ fontSize: '14px', fontWeight: 600 }}>₫</span>
                                </div>
                                <div>
                                    <button type="button" class="btn btn-danger w-100 mb-2">Mua ngay</button>
                                    <button type="button" class="btn btn-outline-primary w-100 mb-2">Thêm vào giỏ</button>
                                    <button type="button" class="btn btn-outline-primary w-100">Mua trước trả sau</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-5 g-2">
                        <div className="col mb-2">
                            <div class="p-3 border bg-light rounded">
                                <div className='d-flex'>
                                    <div>
                                        <span className="badge rounded-pill text-primary p-2" style={{ backgroundColor: "#d1deee" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill text-primary me-2" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                            </svg>
                                        Chính hãng
                                        </span>
                                    </div>
                                    <div className='mt-1'>
                                        <p className='ms-2' style={{ fontSize: '12px' }}>Tác giả: <span className='text-primary'>{book?.authors?.name || 'N/A'}</span></p>
                                    </div>
                                </div>
                                <div className="ps-2 mt-2">
                                    <h5>{book.name}</h5>
                                </div>
                                <div>
                                    <span className="mx-2" style={{ fontSize: '14px' }}>{book?.rating_average || 'N/A'}</span>
                                    <span className='text-warning'>★★★★★</span>
                                    <span className="ps-1 ms-1" style={{ fontSize: '10px', color: "#808089"}}>{book?.quantity_sold?.value || 'N/A'}</span>
                                    <span className="border-start ps-2 ms-2" style={{ fontSize: '10px', color: "#808089"}}>{book?.quantity_sold?.text || 'N/A'}</span>
                                </div>
                                <div className='d-flex ms-2'>
                                    <div className='d-flex'>
                                        <div style={{ fontSize: '20px', fontWeight: 600 }}>{book.current_seller && book.current_seller.price ? book.current_seller.price.toLocaleString('vi-VN') + '₫' : 'Giá không có'}</div>
                                    </div>
                                    <div className="mt-1 ms-1">
                                        <span className="badge rounded-pill text-black" style={{ backgroundColor: "#c1c6cd",fontSize: '12px', fontWeight: 600 }}>-{((book.original_price - book.current_seller.price) / book.original_price * 100).toFixed(2)}%</span>
                                    </div>
                                </div>
                                <div className='mt-4 ms-2 mb-2' style={{ fontSize: '16px', fontWeight: 600 }}>Thông tin chi tiết</div>
                                <div>
                                    <table class="table table-light">
                                        <tbody>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Phiên bản sách</td>
                                                <td>Phiên bản thường</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Công ty phát hành</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'publisher_vn')?.value || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Ngày xuất bản</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'publication_date')?.value || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Kích thước</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'dimensions')?.value || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Dịch Giả</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'dich_gia')?.value || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Loại bìa</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'book_cover')?.value || 'N/A'}</td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: "#808089" }}>Số trang</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'number_of_page')?.value || 'N/A'}</td>
                                            </tr>
                                            <tr style={{ border: "white" }}>
                                                <td style={{ color: "#808089" }}>Nhà xuất bản</td>
                                                <td>{book?.specifications[0]?.attributes.find(attr => attr.code === 'manufacturer')?.value || 'N/A'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border bg-light rounded overflow-hidden">
                                <div className='p-3 pb-0' style={{ fontSize: '16px', fontWeight: 600 }}>Mô tả sản phẩm</div>
                                <div className="p-3">
                                    <img className="object-fit-contain" style={{ width: "100%", height: "100%" }} src={book?.images[0]?.base_url}/>
                                </div>
                                <div className="p-3">
                                    <div dangerouslySetInnerHTML={{ __html: book?.description || 'N/A' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-none d-lg-block col-md-12 col-lg-3">
                        <div class="p-3 border bg-light rounded">
                            <div style={{ fontSize: '14px', fontWeight: 600 }}>Số Lượng</div>
                            <div className='my-2'>
                                <button type="button" class="btn btn-outline-secondary pt-0 px-3" style={{ fontSize: '24px', fontWeight: 600 }}>-</button>
                                <button type="button" class="btn btn-outline-secondary mx-2 py-1 px-4" style={{ fontSize: '24px', fontWeight: 600, color: 'black' }}>1</button>
                                <button type="button" class="btn btn-outline-secondary pt-0" style={{ fontSize: '24px', fontWeight: 600 }}>+</button>
                            </div>
                            <div style={{ fontSize: '14px', fontWeight: 600 }}>Tạm tính</div>
                            <div className='d-flex'>
                                <div style={{ fontSize: '24px', fontWeight: 600 }}>{book.current_seller && book.current_seller.price ? book.current_seller.price.toLocaleString('vi-VN') + '₫' : 'Giá không có'}</div>
                                <span className='pb-4' style={{ fontSize: '14px', fontWeight: 600 }}>₫</span>
                            </div>
                            <div>
                                <button type="button" class="btn btn-danger w-100 mb-2">Mua ngay</button>
                                <button type="button" class="btn btn-outline-primary w-100 mb-2">Thêm vào giỏ</button>
                                <button type="button" class="btn btn-outline-primary w-100">Mua trước trả sau</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Detail
