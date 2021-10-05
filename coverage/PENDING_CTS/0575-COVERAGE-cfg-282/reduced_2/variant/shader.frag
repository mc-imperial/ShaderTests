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

struct GLF_dead14BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_dead14BST GLF_dead14tree[10] = GLF_dead14BST[10](GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1));

void GLF_dead14makeTreeNode(inout GLF_dead14BST GLF_dead14tree)
{
 GLF_dead14tree.data = 1;
}
precision highp int;

precision highp float;

int GLF_dead6MATRIX_N = 1;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

float h_r = 1.0;

vec3 drawShape(vec2 square, vec3 setting)
{
 bool c1 = true;
 c1 = 1.0 < square.x;
 if(c1)
  {
   vec3 defaultColor_inline_return_value_1 = vec3(1.0);
   defaultColor_inline_return_value_1 = vec3(0.0);
   return defaultColor_inline_return_value_1;
  }
 vec3 computeColor_inline_return_value_0 = vec3(1.0);
 float c = 1.0;
 c = setting.z;
 h_r = fract(c);
 computeColor_inline_return_value_0 = vec3(h_r, 1.0, 1.0);
 return computeColor_inline_return_value_0;
}
vec3 computePoint()
{
 if(gl_FragCoord.x < 1.0)
  {
   GLF_dead6MATRIX_N = GLF_dead14BST[10](GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1), GLF_dead14BST(1, 1, 1))[GLF_dead6MATRIX_N].rightIndex;
  }
 vec3 result = vec3(1.0);
 for(int i = 35; (i >= 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); i --)
  {
   _GLF_global_loop_count ++;
   vec3 d = vec3(1.0);
   d = drawShape(vec2(sin(float(i)), 1.0), vec3(1.0, 1.0, float(i)));
   if(length(d) <= 1.0)
    {
     continue;
    }
   result = d;
  }
 return result;
}
void main()
{
 GLF_dead6MATRIX_N = 4;
 computePoint();
 vec3 point3 = vec3(1.0);
 point3 = computePoint();
 vec3 mixed = vec3(1.0);
 if(1.0 > injectionSwitch.y)
  {
   if(GLF_dead14tree[GLF_dead6MATRIX_N].leftIndex == 1)
    {
     GLF_dead14makeTreeNode(GLF_dead14tree[GLF_dead6MATRIX_N]);
     return;
    }
   else
    {
    }
  }
 mixed = mix(vec3(1.0), point3, vec3(0.3));
 _GLF_color = vec4(mixed, 1.0);
}
