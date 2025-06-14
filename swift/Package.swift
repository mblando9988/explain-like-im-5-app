// swift-tools-version: 6.1
import PackageDescription

let package = Package(
    name: "ExplainLikeIm5App",
    platforms: [
        .iOS(.v15)
    ],
    products: [
        .executable(name: "ExplainLikeIm5App", targets: ["ExplainLikeIm5App"])
    ],
    targets: [
        .executableTarget(
            name: "ExplainLikeIm5App",
            path: "Sources/ExplainLikeIm5App"
        )
    ]
)
