#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

struct BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

BST tree[10];

void makeTreeNode(inout BST tree, int data)
{
 tree.data = data;
 tree.leftIndex = - 1;
 tree.rightIndex = - 1;
}
void insert(int treeIndex, int data)
{
 int baseIndex = 0;
 while(baseIndex <= treeIndex)
  {
   if(data <= tree[baseIndex].data)
    {
     if(tree[baseIndex].leftIndex == - 1)
      {
       tree[baseIndex].leftIndex = treeIndex;
       makeTreeNode(tree[treeIndex], data);
       return;
      }
     else
      {
       baseIndex = tree[baseIndex].leftIndex;
       continue;
      }
    }
   else
    {
     if(tree[baseIndex].rightIndex == - 1)
      {
       tree[baseIndex].rightIndex = treeIndex;
       makeTreeNode(tree[treeIndex], data);
       return;
      }
     else
      {
       baseIndex = tree[baseIndex].rightIndex;
       continue;
      }
    }
  }
}
int search(int target)
{
 BST currentNode;
 int index = 0;
 while(index != - 1)
  {
   currentNode = tree[index];
   if(currentNode.data == target)
    {
     return target;
    }
   index = target > currentNode.data ? currentNode.rightIndex : currentNode.leftIndex;
  }
 return - 1;
}
void main()
{
 int treeIndex = 0;
 makeTreeNode(tree[0], 9);
 treeIndex ++;
 insert(treeIndex, 5);
 treeIndex ++;
 insert(treeIndex, 12);
 treeIndex ++;
 insert(treeIndex, 15);
 treeIndex ++;
 insert(treeIndex, 7);
 treeIndex ++;
 insert(treeIndex, 8);
 treeIndex ++;
 insert(treeIndex, 2);
 treeIndex ++;
 insert(treeIndex, 6);
 treeIndex ++;
 insert(treeIndex, 17);
 treeIndex ++;
 insert(treeIndex, 13);
 int count = 0;
 for(int i = 0; i < 20; i ++)
  {
   int result = search(i);
   switch(i)
    {
     case 9:
     case 5:
     case 12:
     case 15:
     case 7:
     case 8:
     case 2:
     case 6:
     case 17:
     case 13:
     if(result == i)
      {
       count ++;
      }
     break;
     default:
     if(result == - 1)
      {
       count ++;
      }
     break;
    }
  }
 if(count == 20)
  {
   _GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
  }
 else
  {
   _GLF_color = vec4(0.0, 0.0, 1.0, 1.0);
  }
}
