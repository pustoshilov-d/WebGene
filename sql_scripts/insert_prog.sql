/*update users_data set id_2 = id;

INSERT INTO users_data(author_name, author_email, data_label, data_description, 
					   terms_acceptation, data_length, date_adding, calculated_time, progress,	
					   data_processed) VALUES ('null', 'null', 'null', 'null', 'false', 0, '2020-06-09 10:10:32.769353', '1 hour', 10, false);
					   

				

CREATE FUNCTION create_data_sample_table() 
returns integer as $$
declare 
	cur_id integer = (select id from users_data where adding_order = (select max(adding_order) from users_data));
	table_name_var text = (select data_sample_path from users_data where id = cur_id);

begin
	EXECUTE format('create table %I as (select * from data_sample_default)', table_name_var);
	return cur_id;
end;
$$ LANGUAGE plpgsql;
  */

select create_data_sample_table(); 


