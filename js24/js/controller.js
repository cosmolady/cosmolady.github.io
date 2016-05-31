define('controller', ['model', 'view', 'jquery'],
	function () {
		return function Controller(model, view) {
			var self = this;
			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.edit-add', editItem);
			view.elements.saveBtn.on('click', saveItem);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}

			function editItem() {
				var item = $(this).attr('data-value');
				view.elements.input.val(item);
				model.setCurIndex(item);
				view.elements.saveBtn.css('display', 'inline-block');
				view.elements.addBtn.attr('disabled', 'true');
			}

			function saveItem() {
				var item = view.elements.input.val();
				model.editItem(item);
				view.elements.saveBtn.css('display', 'none');
				view.renderList(model.data);
				view.elements.input.val('');
				view.elements.addBtn.removeAttr("disabled");
			}
		}
	});