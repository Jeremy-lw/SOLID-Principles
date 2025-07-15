import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { httpClient } from './02-open-close-c';

(async () => {

    const HttpClient = new httpClient();

    const todoService = new TodoService(HttpClient);
    const postService = new PostService(HttpClient);
    const photosService = new PhotosService(HttpClient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();