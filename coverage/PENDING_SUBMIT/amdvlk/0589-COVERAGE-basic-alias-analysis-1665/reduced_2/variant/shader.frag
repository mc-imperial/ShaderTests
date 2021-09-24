#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

struct GLF_dead10BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead10BST GLF_dead10tree[10] = GLF_dead10BST[10](GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1), GLF_dead10BST(1, 1, 1));

void GLF_dead10makeTreeNode(inout GLF_dead10BST GLF_dead10tree)
{
 GLF_dead10tree.data = 1;
}
precision highp int;

precision highp float;

void main()
{
 for(int rows = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); rows ++)
  {
   _GLF_global_loop_count ++;
   for(int _injected_loop_counter = int(injectionSwitch.x); (_injected_loop_counter != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
    }
   if(1 <= GLF_dead10tree[rows].data)
    {
     if(GLF_dead10tree[rows].leftIndex == 1)
      {
       GLF_dead10makeTreeNode(GLF_dead10tree[rows]);
       return;
      }
     else
      {
      }
    }
   else
    {
    }
  }
}
