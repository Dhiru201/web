"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[52],{52:e=>{e.exports=JSON.parse('{"id":"app-architecture","title":"App Architecture in iOS","sections":[{"title":"Introduction","content":"App architecture in iOS refers to the structural design and organization of an application\'s codebase. A well-designed architecture helps maintain code quality, scalability, and testability. This guide covers various architectural patterns and best practices for iOS app development."},{"title":"MVC (Model-View-Controller)","content":"Traditional Apple-recommended pattern:\\n\\n```swift\\n// Model\\nstruct User {\\n    let id: String\\n    let name: String\\n    let email: String\\n}\\n\\n// View\\nclass UserView: UIView {\\n    private let nameLabel = UILabel()\\n    private let emailLabel = UILabel()\\n    \\n    func configure(with user: User) {\\n        nameLabel.text = user.name\\n        emailLabel.text = user.email\\n    }\\n}\\n\\n// Controller\\nclass UserViewController: UIViewController {\\n    private let userView = UserView()\\n    private var user: User?\\n    \\n    override func viewDidLoad() {\\n        super.viewDidLoad()\\n        setupUI()\\n        loadUser()\\n    }\\n    \\n    private func setupUI() {\\n        view.addSubview(userView)\\n        // Setup constraints\\n    }\\n    \\n    private func loadUser() {\\n        // Load user data\\n        user = User(id: \\"1\\", name: \\"John Doe\\", email: \\"john@example.com\\")\\n        userView.configure(with: user!)\\n    }\\n}\\n```"},{"title":"MVVM (Model-View-ViewModel)","content":"Modern pattern separating business logic from UI:\\n\\n```swift\\n// Model\\nstruct User {\\n    let id: String\\n    let name: String\\n    let email: String\\n}\\n\\n// ViewModel\\nclass UserViewModel {\\n    private let user: User\\n    \\n    var name: String { user.name }\\n    var email: String { user.email }\\n    \\n    init(user: User) {\\n        self.user = user\\n    }\\n    \\n    func formatEmail() -> String {\\n        return \\"Email: \\\\(email)\\"\\n    }\\n}\\n\\n// View\\nclass UserView: UIView {\\n    private let nameLabel = UILabel()\\n    private let emailLabel = UILabel()\\n    \\n    func configure(with viewModel: UserViewModel) {\\n        nameLabel.text = viewModel.name\\n        emailLabel.text = viewModel.formatEmail()\\n    }\\n}\\n\\n// ViewController\\nclass UserViewController: UIViewController {\\n    private let userView = UserView()\\n    private var viewModel: UserViewModel?\\n    \\n    override func viewDidLoad() {\\n        super.viewDidLoad()\\n        setupUI()\\n        loadUser()\\n    }\\n    \\n    private func setupUI() {\\n        view.addSubview(userView)\\n        // Setup constraints\\n    }\\n    \\n    private func loadUser() {\\n        let user = User(id: \\"1\\", name: \\"John Doe\\", email: \\"john@example.com\\")\\n        viewModel = UserViewModel(user: user)\\n        userView.configure(with: viewModel!)\\n    }\\n}\\n```"},{"title":"VIPER","content":"Clean architecture pattern separating concerns into distinct layers:\\n\\n```swift\\n// Entity\\nstruct User {\\n    let id: String\\n    let name: String\\n    let email: String\\n}\\n\\n// Router\\nprotocol UserRouterProtocol {\\n    func navigateToUserDetails(user: User)\\n}\\n\\nclass UserRouter: UserRouterProtocol {\\n    weak var viewController: UIViewController?\\n    \\n    func navigateToUserDetails(user: User) {\\n        // Navigation logic\\n    }\\n}\\n\\n// Interactor\\nprotocol UserInteractorProtocol {\\n    func fetchUser() -> User\\n}\\n\\nclass UserInteractor: UserInteractorProtocol {\\n    func fetchUser() -> User {\\n        return User(id: \\"1\\", name: \\"John Doe\\", email: \\"john@example.com\\")\\n    }\\n}\\n\\n// Presenter\\nprotocol UserPresenterProtocol {\\n    func viewDidLoad()\\n    func didSelectUser()\\n}\\n\\nclass UserPresenter: UserPresenterProtocol {\\n    weak var view: UserViewProtocol?\\n    var interactor: UserInteractorProtocol\\n    var router: UserRouterProtocol\\n    \\n    init(interactor: UserInteractorProtocol, router: UserRouterProtocol) {\\n        self.interactor = interactor\\n        self.router = router\\n    }\\n    \\n    func viewDidLoad() {\\n        let user = interactor.fetchUser()\\n        view?.displayUser(user)\\n    }\\n    \\n    func didSelectUser() {\\n        let user = interactor.fetchUser()\\n        router.navigateToUserDetails(user: user)\\n    }\\n}\\n\\n// View\\nprotocol UserViewProtocol: AnyObject {\\n    func displayUser(_ user: User)\\n}\\n\\nclass UserViewController: UIViewController, UserViewProtocol {\\n    var presenter: UserPresenterProtocol!\\n    \\n    override func viewDidLoad() {\\n        super.viewDidLoad()\\n        presenter.viewDidLoad()\\n    }\\n    \\n    func displayUser(_ user: User) {\\n        // Update UI with user data\\n    }\\n}\\n```"},{"title":"Clean Architecture","content":"Layered architecture emphasizing separation of concerns:\\n\\n```swift\\n// Domain Layer\\nprotocol UserRepositoryProtocol {\\n    func fetchUser() -> User\\n}\\n\\n// Data Layer\\nclass UserRepository: UserRepositoryProtocol {\\n    func fetchUser() -> User {\\n        // Fetch from network or database\\n        return User(id: \\"1\\", name: \\"John Doe\\", email: \\"john@example.com\\")\\n    }\\n}\\n\\n// Presentation Layer\\nclass UserViewModel {\\n    private let repository: UserRepositoryProtocol\\n    \\n    init(repository: UserRepositoryProtocol) {\\n        self.repository = repository\\n    }\\n    \\n    func loadUser() -> User {\\n        return repository.fetchUser()\\n    }\\n}\\n\\n// UI Layer\\nclass UserViewController: UIViewController {\\n    private let viewModel: UserViewModel\\n    \\n    init(viewModel: UserViewModel) {\\n        self.viewModel = viewModel\\n        super.init(nibName: nil, bundle: nil)\\n    }\\n    \\n    required init?(coder: NSCoder) {\\n        fatalError(\\"init(coder:) has not been implemented\\")\\n    }\\n    \\n    override func viewDidLoad() {\\n        super.viewDidLoad()\\n        let user = viewModel.loadUser()\\n        // Update UI with user data\\n    }\\n}\\n```"},{"title":"Dependency Injection","content":"Implementing dependency injection for better testability:\\n\\n```swift\\n// Protocol defining dependencies\\nprotocol UserServiceProtocol {\\n    func fetchUser() -> User\\n}\\n\\n// Concrete implementation\\nclass UserService: UserServiceProtocol {\\n    func fetchUser() -> User {\\n        return User(id: \\"1\\", name: \\"John Doe\\", email: \\"john@example.com\\")\\n    }\\n}\\n\\n// ViewModel with injected dependency\\nclass UserViewModel {\\n    private let userService: UserServiceProtocol\\n    \\n    init(userService: UserServiceProtocol) {\\n        self.userService = userService\\n    }\\n    \\n    func loadUser() -> User {\\n        return userService.fetchUser()\\n    }\\n}\\n\\n// Usage\\nlet userService = UserService()\\nlet viewModel = UserViewModel(userService: userService)\\n\\n// For testing\\nclass MockUserService: UserServiceProtocol {\\n    func fetchUser() -> User {\\n        return User(id: \\"test\\", name: \\"Test User\\", email: \\"test@example.com\\")\\n    }\\n}\\n\\nlet mockService = MockUserService()\\nlet testViewModel = UserViewModel(userService: mockService)\\n```"},{"title":"Best Practices","content":"Follow these best practices when designing app architecture:\\n\\n1. Keep components loosely coupled\\n2. Use dependency injection\\n3. Follow SOLID principles\\n4. Implement proper error handling\\n5. Use appropriate design patterns\\n6. Write unit tests\\n\\nExample of SOLID principles implementation:\\n\\n```swift\\n// Single Responsibility Principle\\nclass UserDataManager {\\n    func saveUser(_ user: User) {}\\n    func fetchUser() -> User? { return nil }\\n}\\n\\n// Open/Closed Principle\\nprotocol Shape {\\n    func area() -> Double\\n}\\n\\nclass Rectangle: Shape {\\n    func area() -> Double { return 0 }\\n}\\n\\nclass Circle: Shape {\\n    func area() -> Double { return 0 }\\n}\\n\\n// Liskov Substitution Principle\\nclass Bird {\\n    func fly() {}\\n}\\n\\nclass Penguin: Bird {\\n    override func fly() {\\n        // Penguins can\'t fly\\n    }\\n}\\n\\n// Interface Segregation Principle\\nprotocol Printer {\\n    func print()\\n}\\n\\nprotocol Scanner {\\n    func scan()\\n}\\n\\nclass MultiFunctionPrinter: Printer, Scanner {\\n    func print() {}\\n    func scan() {}\\n}\\n\\n// Dependency Inversion Principle\\nprotocol DatabaseProtocol {\\n    func save(data: Data)\\n}\\n\\nclass SQLiteDatabase: DatabaseProtocol {\\n    func save(data: Data) {}\\n}\\n\\nclass CoreDataDatabase: DatabaseProtocol {\\n    func save(data: Data) {}\\n}\\n```"},{"title":"Common Use Cases","content":"Here are some common architectural scenarios:\\n\\n1. Coordinator Pattern\\n```swift\\nprotocol Coordinator: AnyObject {\\n    var childCoordinators: [Coordinator] { get set }\\n    var navigationController: UINavigationController { get set }\\n    func start()\\n}\\n\\nclass AppCoordinator: Coordinator {\\n    var childCoordinators: [Coordinator] = []\\n    var navigationController: UINavigationController\\n    \\n    init(navigationController: UINavigationController) {\\n        self.navigationController = navigationController\\n    }\\n    \\n    func start() {\\n        let userCoordinator = UserCoordinator(navigationController: navigationController)\\n        childCoordinators.append(userCoordinator)\\n        userCoordinator.start()\\n    }\\n}\\n\\nclass UserCoordinator: Coordinator {\\n    var childCoordinators: [Coordinator] = []\\n    var navigationController: UINavigationController\\n    \\n    init(navigationController: UINavigationController) {\\n        self.navigationController = navigationController\\n    }\\n    \\n    func start() {\\n        let viewModel = UserViewModel()\\n        let viewController = UserViewController(viewModel: viewModel)\\n        navigationController.pushViewController(viewController, animated: true)\\n    }\\n}\\n```\\n\\n2. Repository Pattern\\n```swift\\nprotocol UserRepositoryProtocol {\\n    func fetchUsers() -> [User]\\n    func saveUser(_ user: User)\\n    func deleteUser(_ user: User)\\n}\\n\\nclass UserRepository: UserRepositoryProtocol {\\n    private let localDataSource: UserLocalDataSourceProtocol\\n    private let remoteDataSource: UserRemoteDataSourceProtocol\\n    \\n    init(localDataSource: UserLocalDataSourceProtocol,\\n         remoteDataSource: UserRemoteDataSourceProtocol) {\\n        self.localDataSource = localDataSource\\n        self.remoteDataSource = remoteDataSource\\n    }\\n    \\n    func fetchUsers() -> [User] {\\n        // Try local first, then remote\\n        return []\\n    }\\n    \\n    func saveUser(_ user: User) {\\n        // Save to both local and remote\\n    }\\n    \\n    func deleteUser(_ user: User) {\\n        // Delete from both local and remote\\n    }\\n}\\n```\\n\\n3. Factory Pattern\\n```swift\\nprotocol ViewControllerFactoryProtocol {\\n    func makeUserViewController() -> UIViewController\\n    func makeSettingsViewController() -> UIViewController\\n}\\n\\nclass ViewControllerFactory: ViewControllerFactoryProtocol {\\n    func makeUserViewController() -> UIViewController {\\n        let viewModel = UserViewModel()\\n        return UserViewController(viewModel: viewModel)\\n    }\\n    \\n    func makeSettingsViewController() -> UIViewController {\\n        let viewModel = SettingsViewModel()\\n        return SettingsViewController(viewModel: viewModel)\\n    }\\n}\\n```"}]}')}}]);