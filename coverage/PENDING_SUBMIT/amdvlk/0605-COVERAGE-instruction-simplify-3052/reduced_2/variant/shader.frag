#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct GLF_dead5BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead5BST GLF_dead5tree[10] = GLF_dead5BST[10](GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1));

precision highp float;

precision highp int;

void main()
{
 GLF_dead5tree = GLF_dead5BST[10](GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 47941, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1), GLF_dead5BST(1, 1, 1));
 for(int GLF_dead4i = 1; (GLF_dead4i < 800) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   int donor_replacementGLF_dead5treeIndex = 1;
   donor_replacementGLF_dead5treeIndex = 1 + GLF_dead4i;
   while((GLF_dead4i <= donor_replacementGLF_dead5treeIndex) && (_GLF_global_loop_count < _GLF_global_loop_bound))
    {
     _GLF_global_loop_count ++;
     GLF_dead4i = GLF_dead5tree[1].leftIndex;
    }
  }
}
