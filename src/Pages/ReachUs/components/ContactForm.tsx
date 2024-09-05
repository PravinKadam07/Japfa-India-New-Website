import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MdCheckCircle, MdError } from 'react-icons/md';
import { departmentContacts } from '../../../data/contactUs';
import { sendContactUsEmail } from '../../../utils/sendContactUsEmail';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	// input states
	const [inputValues, setInputValues] = useState({
		name: '',
		contactNumber: '',
		department: '',
		email: '',
		message: '',
	});
	const closeModal = () => {
		setIsOpen(false);
		navigate(0);
	};
	// const [departmentOptions, setDepartmentOptions] = useState(['']);
	const onChangeInput = (e: any) => {
		setInputValues({
			...inputValues,
			[e.target.name]: e.target.value,
		});
	};

	const [showErrors, setShowErrors] = useState({
		name: false,
		contactNumber: false,
		department: false,
		email: false,
	});

	const [errorMessages, setErrorMessages] = useState({
		name: 'Please enter the name',
		contactNumber: 'Please enter valid contact number',
		department: 'Please select department',
		email: 'Please enter the correct email',
	});

	// focusedFields state for stoopinig input validation initially
	const [focusedFields, setFocusedFields] = useState({
		name: false,
		contactNumber: false,
		email: false,
	});
	const handleBlur = (field: string) => {
		setFocusedFields({
			...focusedFields,
			[field]: true,
		});
	};

	// state for select department options
	const [departmentError, setDepartmentError] = useState(false);
	const onChangeDepartment = (e: any) => {
		setInputValues({
			...inputValues,
			department: e.target.value,
		});
		setDepartmentError(false); // Reset department error on change
	};

	const [formSubmitted, setFormSubmitted] = useState({
		status: false,
		message: '',
	});
	// submit handle
	const handleSubmit = async () => {
		let valid = true;

		// Validate name
		if (!inputValues.name) {
			setShowErrors(prev => ({ ...prev, name: true }));
			valid = false;
		} else {
			setShowErrors(prev => ({ ...prev, name: false }));
		}

		// Validate contact number
		const contactNumberPattern = /^[6-9]\d{9}$/;
		if (!inputValues.contactNumber || !contactNumberPattern.test(inputValues.contactNumber)) {
			setShowErrors(prev => ({ ...prev, contactNumber: true }));
			valid = false;
		} else {
			setShowErrors(prev => ({ ...prev, contactNumber: false }));
		}

		// Validate department
		if (!inputValues.department) {
			setShowErrors(prev => ({ ...prev, department: true }));
			valid = false;
		} else {
			setShowErrors(prev => ({ ...prev, department: false }));
		}

		// Validate email (if provided)
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (inputValues.email && !emailPattern.test(inputValues.email)) {
			setShowErrors(prev => ({ ...prev, email: true }));
			valid = false;
		} else {
			setShowErrors(prev => ({ ...prev, email: false }));
		}

		if (valid) {
			try {
				const department = departmentContacts.find(
					(department) =>
						department?.department === inputValues.department,
				);
				console.log(department);
				if (!department) {
					throw new Error('Department not found');
				}
				const response = await sendContactUsEmail({
					...inputValues,
					sendTo: department?.email!,
				});
				if (response) {
					setIsOpen(true);
					// setFormSubmitted({
					// 	status: true,
					// 	message: 'Your request has been submitted successfully.',
					// });
				}
			} catch (error) {
				setIsOpen(true);
				console.error('Error sending contact form:', error);
				// setFormSubmitted({
				// 	status: true,
				// 	message: 'Your ',
				// });
			}
		} else {
			console.log('Validation failed');
		}
	};
	return (
		<>
			<div
				className="rounded-[20px] bg-[#FFF6E7] px-5 py-10 md:px-10 md:py-14"
				id="contact-form"
			>
				<div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
					{/* Name Input */}
					<label
						htmlFor=""
						className="mb-3 flex w-full flex-col gap-2 lg:w-6/12"
					>
						<span className="text-base font-normal leading-6 text-black">
							Name{' '}
							<sup className="-left-[3px] -top-[1px] text-[16px] md:text-[19px]">
								*
							</sup>
						</span>
						<input
							type="text"
							name="name"
							id="name"
							className="form-input rounded border border-solid border-[#DDD] px-5 py-5"
							placeholder="Full name"
							onChange={onChangeInput}
							required
							pattern="^[a-zA-Z\s]{3,25}$"
							onBlur={() => handleBlur('name')}
							data-focused={focusedFields.name.toString()}
						/>
						<span className={`text-[14px] text-[#ff2525] ${showErrors.name ? 'visible' : 'invisible'}`}>
							{errorMessages.name}
						</span>
					</label>

					{/* Contact number input */}
					<label
						htmlFor=""
						className="mb-3 flex w-full flex-col gap-2 lg:w-6/12"
					>
						<span className="text-base font-normal leading-6 text-black">
							Contact number{' '}
							<sup className="-left-[3px] -top-[1px] text-[16px] md:text-[19px]">
								*
							</sup>
						</span>
						<input
							type="text"
							name="contactNumber"
							id="name"
							className="form-input rounded border border-solid border-[#DDD] px-5 py-5"
							placeholder="0123456789"
							onChange={onChangeInput}
							required
							pattern="^[6-9]\d{9}$"
							onBlur={() => handleBlur('contactNumber')}
							data-focused={focusedFields.contactNumber.toString()}
						/>
						<span className={`text-[14px] text-[#ff2525] ${showErrors.contactNumber ? 'visible' : 'invisible'}`}>
							{errorMessages.contactNumber}
						</span>
					</label>
				</div>
				<div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
					{/* Department Select option */}
					<label
						htmlFor=""
						className="mb-3 flex w-full flex-col gap-2 lg:w-6/12"
					>
						<span className="font-normal-leading-6 text-base text-black">
							Department{' '}
							<sup className="-left-[3px] -top-[1px] text-[16px] md:text-[19px]">
								*
							</sup>
						</span>
						<select
							className="form-select rounded border border-solid border-[#DDD] px-5 py-5"
							required
							onChange={onChangeDepartment}
						>
							<option value="" selected>
								Select Department
							</option>
							{departmentContacts.map((department) => (
								<option
									key={department.department}
									value={department.department}
								>
									{department.department}
								</option>
							))}
						</select>

						<span className={`text-[14px] text-[#ff2525] ${showErrors.department ? 'visible' : 'invisible'}`}>
							{errorMessages.department}
						</span>
					</label>

					{/* Email input */}
					<label
						htmlFor=""
						className="mb-3 flex w-full flex-col gap-2 lg:w-6/12"
					>
						<span className="text-base font-normal leading-6 text-black">
							Email
						</span>
						<input
							type="email"
							name="email"
							id="name"
							className="form-input rounded border border-solid border-[#DDD] px-5 py-5"
							placeholder="abc123@gmail.com"
							onChange={onChangeInput}
							onBlur={() => handleBlur('email')}
							data-focused={focusedFields.email.toString()}
						/>
						<span className={`text-[14px] text-[#ff2525] ${showErrors.email ? 'visible' : 'invisible'}`}>
							{errorMessages.email}
						</span>
					</label>
				</div>
				<div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
					<label
						htmlFor=""
						className="mb-6 flex w-full flex-col gap-2"
					>
						<span>Message</span>
						<textarea
							name="message"
							id="message"
							className="form-textarea resize-none rounded border border-solid border-[#DDD] px-5 py-5"
							placeholder="Upto 1000 words"
							rows={4}
							onChange={onChangeInput}
						></textarea>
					</label>
				</div>
				<div className="flex items-center justify-between gap-2">
					<button
						className="flex items-center justify-center gap-2 px-6 py-5 text-white bg-[#EC691F]"
						onClick={handleSubmit}
					>
						Submit
					</button>
				</div>
				{formSubmitted.message && (
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
						{formSubmitted.message}
					</div>
				)}
			</div>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
								<Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-[40px] text-left align-middle shadow-xl transition-all max-sm:max-w-md lg:max-w-[575px]">
									<div className="flex flex-col items-center justify-between gap-4">
										<h3 className="text-lg font-medium leading-6 text-gray-900">
											Your request has been submitted
											successfully.
										</h3>
										<button
											className="max-w-[116px] bg-[#EC691F] p-[20px] text-[16px] text-[#FFFFFF]"
											onClick={closeModal}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default ContactForm;
