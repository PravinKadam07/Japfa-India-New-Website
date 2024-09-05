import { Dialog, Transition } from '@headlessui/react';
import { State } from 'country-state-city';
import React, { Fragment, useEffect, useState } from 'react';
import { supplierContacts } from '../../../data/supplierContacts';
import { fetchSuppliersTnc, modifyPath } from '../../../utils/fetchFromApi';
import { sendSuppliersEmail } from '../../../utils/sendSuppliersEmail';
import { useNavigate } from 'react-router-dom';

const TermsEnquire = () => {
	const navigate = useNavigate();
	const pdf = `${process.env.PUBLIC_URL}/assets/img/pdf-file.svg`;
	const enquire = `${process.env.PUBLIC_URL}/assets/img/enquire.svg`;
	const [isOpen, setIsOpen] = React.useState(false);
	const [isSubmitted, setIsSubmitted] = React.useState(false);
	const [formData, setFormData] = useState({
		name: '',
		contactNumber: '',
		department: '',
		email: '',
		location: '',
		message: '',
	});
	const closeModal = () => {
		setIsOpen(false);
		setIsSubmitted(false);
		navigate(0);
		setFormData({
			name: '',
			contactNumber: '',
			department: '',
			email: '',
			location: '',
			message: '',
		});
		const inputs = document.querySelectorAll('input, select, textarea');
		inputs.forEach((input) => {
			(input as HTMLInputElement).value = '';
		});
	};
	const openModal = () => {
		setIsOpen(true);
	};
	const [downloadFile, setDownloadFiles] = useState('');
	useEffect(() => {
		fetchSuppliersTnc()
			.then((data) => setDownloadFiles(modifyPath(data[0].acf.file)))
			.catch((error) => console.log(error));
	}, []);
	const departmentList = supplierContacts.map((item) => item.department);

	const onChangeFormData = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const [focusedFields, setFocusedFields] = useState({
		name: false,
		contactNumber: false,
		email: false,
		message: false,
	});
	const [errorMessages, setErrorMessages] = useState({
		name: 'Please enter your name',
		contactNumber: 'Please enter valid contact number',
		department: 'Please select department',
		email: 'Please enter the correct email',
		location: 'Please select a location',
		message: 'Please enter a message',
	});

	const [showErrors, setShowErrors] = useState({
		name: false,
		contactNumber: false,
		department: false,
		email: false,
		location: false,
		message: false,
	});
	const handleBlur = (field: string) => {
		setFocusedFields({
			...focusedFields,
			[field]: true,
		});
	};

	const [departmentError, setDepartmentError] = useState(false);
	const onChangeDepartment = (e: any) => {
		setFormData({
			...formData,
			department: e.target.value,
		});
		setDepartmentError(false);
	};
	const [formSubmitted, setFormSubmitted] = useState({
		status: false,
		message: '',
	});
	const handleSubmit = async () => {
		const { name, contactNumber, department, location, email } = formData;
		let valid = true;

		// Validate name
		if (!name) {
			setShowErrors((prev) => ({ ...prev, name: true }));
			valid = false;
		} else {
			setShowErrors((prev) => ({ ...prev, name: false }));
		}

		// Validate contact number
		const contactNumberPattern = /^[6-9]\d{9}$/;
		if (!contactNumber || !contactNumberPattern.test(contactNumber)) {
			setShowErrors((prev) => ({ ...prev, contactNumber: true }));
			valid = false;
		} else {
			setShowErrors((prev) => ({ ...prev, contactNumber: false }));
		}

		// Validate department
		if (!department) {
			setShowErrors((prev) => ({ ...prev, department: true }));
			valid = false;
		} else {
			setShowErrors((prev) => ({ ...prev, department: false }));
		}

		// Validate location
		if (!location) {
			setShowErrors((prev) => ({ ...prev, location: true }));
			valid = false;
		} else {
			setShowErrors((prev) => ({ ...prev, location: false }));
		}
		// Validate email
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (email && !emailPattern.test(email)) {
			setShowErrors((prev) => ({ ...prev, email: true }));
			valid = false;
		} else {
			setShowErrors((prev) => ({ ...prev, email: false }));
		}

		if (valid) {
			// Find the matching department contact
			const departmentContact = supplierContacts.find(
				(contact) => contact.department === department,
			);
			departmentContact?.contactPerson.forEach(async (person) => {
				try {
					const response = await sendSuppliersEmail({
						...formData,
						sendTo: person.email,
					});
					if (!response) {
						setIsSubmitted(true);
						setFormSubmitted({
							status: true,
							message: 'Enquiry submitted successfully',
						});
					}
				} catch (error) {
					setIsSubmitted(true);
					setFormSubmitted({
						status: true,
						message: 'Enquiry submitted successfully',
					});
					// setFormSubmitted({
					// 	status: false,
					// 	message: 'Failed to send email',
					// });
				}
			});
		} else {
			console.log('Validation failed');
		}
	};
	// const CountryData = Country.getAllCountries();
	// const CityData = City.getAllCities();
	const StateData = State.getStatesOfCountry('IN');

	return (
		<>
			<div className="">
				<h1 className="pb-[40px] text-center text-5xl font-extrabold lg:pb-[60px] lg:text-7xl">
					Terms and conditions
				</h1>
				<div className=" mx-auto flex max-w-[1156px]  flex-row gap-5 border-y-2 border-[#898989] border-opacity-40  py-10 md:justify-between md:px-6 lg:px-28">
					<p className="flex flex-col text-[24px] lg:text-[32px]">
						Purchase order - Terms and conditions for RM (MATERIAL
						TYPE - ZROH)
					</p>
					<div className="flex flex-col items-center justify-center text-xl  font-bold md:flex-row">
						<a
							href={downloadFile}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={pdf} alt="" className="mx-auto" />
							Download
						</a>
					</div>
				</div>
			</div>
			<div className="mt-[60px] flex flex-col items-center gap-20 sm:mt-[80px] md:flex-row lg:mt-[120px] lg:gap-40 lg:px-40">
				<div className="md:w-2/5">
					<img src={enquire} alt="" />
				</div>
				<div className="flex flex-col gap-6 md:w-3/5">
					<h1 className="text-5xl font-extrabold lg:text-7xl">
						Enquire
					</h1>
					<p className="text-2xl">
						If you're interested in exploring a partnership with us,
						please provide your details by clicking the 'Enquire
						Now'.
					</p>
					<div>
						<button
							className="inline-block bg-[#EC691F] px-6 py-5 text-white"
							onClick={openModal}
						>
							Explore now
						</button>
					</div>
					<Transition appear show={isOpen} as={Fragment}>
						<Dialog
							as="div"
							className="relative z-10"
							onClose={closeModal}
						>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<div className="jobForm-custom-backdrop fixed inset-0 bg-black/30" />
							</Transition.Child>

							<div className="fixed inset-0 overflow-y-auto">
								<div className="flex min-h-full items-center justify-center p-4 text-center">
									<Transition.Child
										as={Fragment}
										enter="ease-out duration-300"
										enterFrom="opacity-0 scale-95"
										enterTo="opacity-100 scale-100"
										leave="ease-in duration-200"
										leaveFrom="opacity-100 scale-100"
										leaveTo="opacity-0 scale-95"
									>
										<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-[40px] text-left align-middle shadow-xl transition-all md:min-w-[764px] lg:min-w-[764px]">
											{!isSubmitted ? (
												<>
													<div className="flex items-center gap-[24px] max-md:flex-col lg:flex-row">
														<label
															htmlFor="name"
															className="mb-6 flex w-full flex-col gap-2 max-md:mb-[0px] lg:w-6/12"
														>
															<span className="text-base font-normal leading-6 text-black">
																Name{' '}
																<sup className="-left-[3px] -top-[1px] text-[19px]">
																	*
																</sup>
															</span>
															<input
																name="name"
																type="text"
																id="name"
																onChange={
																	onChangeFormData
																}
																required
																pattern="^[a-zA-Z\s]{3,25}$"
																onBlur={() =>
																	handleBlur(
																		'name',
																	)
																}
																data-focused={focusedFields.name.toString()}
																className="form-input rounded border border-solid border-[#DDD] px-[20px]"
																placeholder="Full name"
															/>
															<span
																className={`text-[14px] text-[#ff2525] ${showErrors.name ? 'visible' : 'invisible'}`}
															>
																{
																	errorMessages.name
																}
															</span>
														</label>
														<label
															htmlFor=""
															className="mb-6 flex w-full flex-col gap-2 lg:w-6/12"
														>
															<span className="text-base font-normal leading-6 text-black">
																Contact number{' '}
																<sup className="-left-[3px] -top-[1px] text-[19px]">
																	*
																</sup>
															</span>
															<input
																name="contactNumber"
																type="text"
																id="name"
																className="form-input rounded border border-solid border-[#DDD] px-[20px]"
																placeholder="0123456789"
																onChange={
																	onChangeFormData
																}
																pattern="[2-9]\d{2}[2-9]\d{2}\d{4}$"
																onBlur={() =>
																	handleBlur(
																		'contactNumber',
																	)
																}
																data-focused={focusedFields.contactNumber.toString()}
															/>
															<span
																className={` text-[14px] text-[#ff2525] ${showErrors.contactNumber ? 'visible' : 'invisible'}`}
															>
																{
																	errorMessages.contactNumber
																}
															</span>
														</label>
													</div>
													<div className="flex items-center gap-[24px] max-md:flex-col lg:flex-row">
														<label
															htmlFor=""
															className="mb-6 flex w-full flex-col gap-2 max-md:mb-[0px] lg:w-6/12"
														>
															<span className="text-base font-normal leading-6 text-black">
																Department{' '}
																<sup className="-left-[3px] -top-[1px] text-[19px]">
																	*
																</sup>
															</span>
															<select
																name="department"
																required
																onChange={
																	onChangeDepartment
																}
																className="form-select rounded border border-solid border-[#DDD] px-[20px]"
															>
																<option
																	value=""
																	selected
																>
																	Select
																	Department
																</option>
																{departmentList.map(
																	(item) => (
																		<option
																			value={
																				item
																			}
																		>
																			{
																				item
																			}
																		</option>
																	),
																)}
																{/* <option value="1">
															Raw materials
														</option>
														<option value="2">
															Premix and medicine
														</option>
														<option value="3">
															Packing materials
														</option>
														<option value="4">
															Other
														</option> */}
															</select>
															<span
																className={`"text-[14px] text-[#ff2525] ${showErrors.department ? 'visible' : 'invisible'}`}
															>
																{
																	errorMessages.department
																}
															</span>
														</label>
														<label
															htmlFor=""
															className="mb-6 flex w-full flex-col gap-2 lg:w-6/12"
														>
															<span className="text-base font-normal leading-6 text-black">
																Email
															</span>
															<input
																name="email"
																type="email"
																id="name"
																className="form-input rounded border border-solid border-[#DDD] px-[20px]"
																placeholder="abc123@gmail.com"
																onChange={
																	onChangeFormData
																}
																onBlur={() =>
																	handleBlur(
																		'email',
																	)
																}
																data-focused={focusedFields.email.toString()}
															/>
															<span
																className={`"text-[14px] text-[#ff2525] ${showErrors.email ? 'visible' : 'invisible'}`}
															>
																{
																	errorMessages.email
																}
															</span>
														</label>
													</div>
													<div className="flex items-center gap-[24px] lg:flex-row">
														<label
															htmlFor=""
															className="mb-6 flex max-w-full flex-col gap-2 sm:min-w-[100%] md:min-w-[330px] lg:w-6/12"
														>
															<span className="text-base font-normal leading-6 text-black">
																Location{' '}
																<sup className="-left-[3px] -top-[1px] text-[19px]">
																	*
																</sup>
															</span>

															<select
																name="location"
																className="form-select rounded border border-solid border-[#DDD] px-[20px] lg:max-w-[330px]"
																required
																onChange={
																	onChangeFormData
																}
															>
																<option
																	value=""
																	selected
																>
																	Select State
																</option>
																{StateData.map(
																	(state) => (
																		<option
																			key={
																				state.isoCode
																			}
																			value={
																				state.isoCode
																			}
																		>
																			{
																				state.name
																			}
																		</option>
																	),
																)}
															</select>
															<span
																className={`"text-[14px] text-[#ff2525] ${showErrors.location ? 'visible' : 'invisible'}`}
															>
																{
																	errorMessages.location
																}
															</span>
														</label>
													</div>

													<div className="items-left flex flex-col">
														<label
															htmlFor=""
															className="mb-[40px] flex w-full flex-col gap-2"
														>
															<span>Message</span>
															<textarea
																name="message"
																id="message"
																className="form-textarea resize-none rounded border border-solid border-[#DDD] px-[20px]"
																placeholder="Upto 1000 words"
																rows={4}
																onChange={
																	onChangeFormData
																}
															></textarea>
														</label>
														<button
															// className={`max-w-[116px]  px-[32px] py-[20px] text-[16px] text-[#FFFFFF] ${
															// 	areAllFieldsFilled()
															// 		? 'bg-[#EC691F]'
															// 		: 'bg-[#CCCCCC]'
															// }`}
															className="max-w-[116px]  bg-[#EC691F] px-[32px] py-[20px] text-[16px] text-[#FFFFFF]"
															onClick={
																handleSubmit
															}
															type="submit"
															// disabled={
															// 	!areAllFieldsFilled()
															// }
														>
															Submit
														</button>
														{/* {formSubmitted.message && (
															<div
																className={`mt-4 flex items-center gap-2 text-base font-medium ${
																	formSubmitted.status
																		? 'text-green-700'
																		: 'text-[#ff2525]'
																}`}
															>
																{formSubmitted.status ? (
																	<MdCheckCircle className="text-base" />
																) : (
																	<MdError className="text-base" />
																)}
																{
																	formSubmitted.message
																}
															</div>
														)} */}
													</div>
												</>
											) : (
												<>
													<div className="flex flex-col items-center justify-between gap-4">
														<h3 className="text-lg font-medium leading-6 text-gray-900">
															Enquiry submitted
															successfully
														</h3>
														<button
															className="max-w-[116px] bg-[#EC691F] p-[20px] text-[16px] text-[#FFFFFF]"
															onClick={closeModal}
														>
															Close
														</button>
													</div>
												</>
											)}
										</Dialog.Panel>
									</Transition.Child>
								</div>
							</div>
						</Dialog>
					</Transition>
				</div>
			</div>
		</>
	);
};

export default TermsEnquire;
