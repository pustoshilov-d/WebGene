INSERT INTO public.users_data(
	id, author_name, author_email,
	data_label, data_description, terms_acceptation,
	error_code, error_message, step_code,
	images_path, calculated_time, progress,
	data_sample_path, data_length, date_adding,
	data_processed)
	VALUES (10, 'Victor', 'victor@gmail.com',
			'Human DNA', 'Even if we, when we were just born, lived already one in the river Upe, under the dam, and the other in Gavlovitsy - you know, there, near the wooden bridge.', true,
			null, null, null,
			null, '10 hours', 10,
			'data_sample_10', null, null,
			false);
			
select * from public.users_data;