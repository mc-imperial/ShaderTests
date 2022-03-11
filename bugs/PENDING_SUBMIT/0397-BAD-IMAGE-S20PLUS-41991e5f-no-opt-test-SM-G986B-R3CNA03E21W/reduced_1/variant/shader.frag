#version 320 es

precision highp int;

precision highp float;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp float;

precision highp int;

struct GLF_live10BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live10BST GLF_live10tree[10] = GLF_live10BST[10](GLF_live10BST(1, - 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1), GLF_live10BST(1, 1, 1));

void GLF_live10makeTreeNode(inout GLF_live10BST GLF_live10tree, int GLF_live10data)
{
 GLF_live10tree.data = 1;
}
void GLF_live10insert(int GLF_live10treeIndex, int GLF_live10data)
{
 int GLF_live10baseIndex = 0;
 int GLF_live10_looplimiter0 = 0;
 while(1 <= 1)
  {
   if(GLF_live10_looplimiter0 >= 5)
    {
     break;
    }
   GLF_live10_looplimiter0 ++;
   if(GLF_live10tree[clamp(GLF_live10baseIndex, 0, 10 - 1)].leftIndex == - 1)
    {
     GLF_live10makeTreeNode(GLF_live10tree[1], 1);
     return;
    }
   else
    {
     GLF_live10baseIndex = 1;
     continue;
    }
  }
}
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
float compute_value(float limit, float thirty_two)
{
 float result = - 0.5;
 for(int i = 1; i < 800; i ++)
  {
   if((i % 32) == 0)
    {
     result += 0.4;
    }
   else
    {
     if(mod(float(i), round(thirty_two)) <= 0.01)
      {
       result += 100.0;
      }
    }
   GLF_live10insert(1, 1);
   if(float(i) >= limit)
    {
     return result;
    }
  }
 return result;
}
void main()
{
 vec3 c = vec3(7.0, 8.0, 9.0);
 float thirty_two = round(resolution.x / 8.0);
 c.x = compute_value(gl_FragCoord.x, thirty_two);
 c.y = compute_value(gl_FragCoord.y, thirty_two);
 c.z = c.x + c.y;
 for(int i = 0; i < 3; i ++)
  {
   if((injectionSwitch.x > injectionSwitch.y))
    {
     discard;
    }
   if(c[i] >= 1.0)
    {
     c[i] = c[i] * c[i];
    }
  }
 _GLF_color = vec4(normalize(abs(c)), 1.0);
}
