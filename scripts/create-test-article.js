import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import readline from 'readline';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const testArticle = {
    title: "Getting Started with AI Development",
    content: `# Getting Started with AI Development

Artificial Intelligence (AI) is revolutionizing the way we build software and solve complex problems. In this guide, we'll explore the fundamentals of AI development and how you can get started.

## What is AI Development?

AI development involves creating systems that can learn from data, identify patterns, and make decisions with minimal human intervention. It encompasses various fields:

- Machine Learning
- Natural Language Processing
- Computer Vision
- Robotics

## Essential Tools and Technologies

To begin your AI development journey, you'll need to familiarize yourself with these tools:

1. **Programming Languages**
   - Python (most popular for AI)
   - R (statistical computing)
   - Julia (high-performance computing)

2. **Libraries and Frameworks**
   - TensorFlow
   - PyTorch
   - scikit-learn
   - Keras

3. **Development Environments**
   - Jupyter Notebooks
   - VS Code
   - PyCharm

## Getting Started

1. Start with Python basics
2. Learn data manipulation with NumPy and Pandas
3. Understand machine learning fundamentals
4. Practice with small projects
5. Join AI communities and forums

## Best Practices

- Start small and gradually increase complexity
- Focus on data quality
- Document your code thoroughly
- Keep up with the latest developments
- Collaborate with others

Remember, AI development is an iterative process. Don't be afraid to experiment and learn from your mistakes!`,
    seo_title: "AI Development Guide: Getting Started with Artificial Intelligence",
    seo_description: "Learn the fundamentals of AI development, essential tools, and best practices to start your journey in artificial intelligence and machine learning.",
    is_published: true,
    slug: "getting-started-with-ai-development"
};

async function createTestArticle() {
    try {
        // No need for login with service role
        console.log('Using service role authentication...');

        // Upload image
        const imageFile = await fs.promises.readFile('images/blog/test-article-image.jpg');
        const imagePath = `test-article-${Date.now()}.jpg`;
        
        const { data: imageData, error: imageError } = await supabase.storage
            .from('article-images')
            .upload(imagePath, imageFile, {
                contentType: 'image/jpeg'
            });

        if (imageError) {
            throw imageError;
        }

        console.log('Image uploaded successfully!');

        // Create article
        const { data: article, error: articleError } = await supabase
            .from('articles')
            .insert([{
                ...testArticle,
                image_path: imagePath
            }]);

        if (articleError) {
            throw articleError;
        }

        console.log('Test article created successfully!');
        console.log('Article data:', article);
    } catch (error) {
        console.error('Error creating test article:', error);
    } finally {
        rl.close();
    }
}

createTestArticle(); 