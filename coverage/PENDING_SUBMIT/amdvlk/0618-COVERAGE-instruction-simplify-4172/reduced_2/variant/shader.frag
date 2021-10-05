#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST tree[10] = BST[10](BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1), BST(1, 1, 1));

void makeTreeNode(inout BST tree)
{
}
int search(int target)
{
 BST currentNode = BST(1, 1, 1);
 int index = 1;
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   currentNode = tree[_GLF_MAKE_IN_BOUNDS_INT(index, 10)];
   if(gl_FragCoord.x < 0.0)
    {
     continue;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     continue;
    }
   if(currentNode.data == 1)
    {
     return target;
    }
   if(injectionSwitch.x > injectionSwitch.y)
    {
     break;
    }
   if(gl_FragCoord.x < 0.0)
    {
     return 1;
    }
   index = currentNode.rightIndex;
  }
 return 1;
}
void main()
{
 makeTreeNode(tree[1]);
 vec3 hueColor_inline_return_value_0 = vec3(1.0);
 float nodeData = 1.0;
 nodeData = float(search(15));
 vec3 color = vec3(1.0);
 color = vec3(1.0, 1.0, nodeData);
 hueColor_inline_return_value_0 = color;
 _GLF_color = vec4(hueColor_inline_return_value_0, 1.0);
}
