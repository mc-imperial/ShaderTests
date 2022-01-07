; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 76
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %70
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "S"
               OpMemberName %10 0 "arr"
               OpName %12 "obj"
               OpName %17 "i"
               OpName %19 "buf0"
               OpMemberName %19 0 "v0"
               OpName %21 ""
               OpName %40 "a"
               OpName %54 "buf1"
               OpMemberName %54 0 "v1"
               OpName %56 ""
               OpName %70 "_GLF_color"
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 0
               OpMemberDecorate %54 0 Offset 0
               OpDecorate %54 Block
               OpDecorate %56 DescriptorSet 0
               OpDecorate %56 Binding 1
               OpDecorate %70 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypeStruct %9
         %11 = OpTypePointer Function %10
         %13 = OpConstant %6 0
         %14 = OpConstantComposite %9 %13 %13 %13 %13 %13 %13 %13 %13 %13 %13
         %15 = OpConstantComposite %10 %14
         %16 = OpTypePointer Function %6
         %18 = OpTypeVector %6 2
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %7 0
         %23 = OpTypePointer Uniform %6
         %32 = OpConstant %6 2
         %33 = OpTypeBool
         %38 = OpConstant %6 1
         %46 = OpTypePointer Function %18
         %50 = OpTypePointer Uniform %18
         %54 = OpTypeStruct %18
         %55 = OpTypePointer Uniform %54
         %56 = OpVariable %55 Uniform
         %59 = OpConstant %7 1
         %67 = OpTypeFloat 32
         %68 = OpTypeVector %67 4
         %69 = OpTypePointer Output %68
         %70 = OpVariable %69 Output
         %71 = OpConstant %67 1
         %72 = OpConstant %67 0
         %73 = OpConstantComposite %68 %71 %72 %72 %71
         %75 = OpConstantComposite %68 %72 %72 %72 %72
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %17 = OpVariable %16 Function
         %40 = OpVariable %16 Function
         %47 = OpVariable %46 Function
               OpStore %12 %15
         %24 = OpAccessChain %23 %21 %13 %22
         %25 = OpLoad %6 %24
               OpStore %17 %25
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %6 %17
         %34 = OpSLessThan %33 %31 %32
               OpBranchConditional %34 %27 %28
         %27 = OpLabel
         %35 = OpLoad %6 %17
         %36 = OpAccessChain %16 %12 %13 %35
               OpStore %36 %32
               OpBranch %29
         %29 = OpLabel
         %37 = OpLoad %6 %17
         %39 = OpIAdd %6 %37 %38
               OpStore %17 %39
               OpBranch %26
         %28 = OpLabel
         %41 = OpAccessChain %16 %12 %13 %38
         %42 = OpLoad %6 %41
         %43 = OpAccessChain %23 %21 %13 %22
         %44 = OpLoad %6 %43
         %45 = OpSLessThan %33 %44 %38
               OpSelectionMerge %49 None
               OpBranchConditional %45 %48 %53
         %48 = OpLabel
         %51 = OpAccessChain %50 %21 %13
         %52 = OpLoad %18 %51
               OpStore %47 %52
               OpBranch %49
         %53 = OpLabel
         %57 = OpAccessChain %50 %56 %13
         %58 = OpLoad %18 %57
               OpStore %47 %58
               OpBranch %49
         %49 = OpLabel
         %60 = OpAccessChain %16 %47 %59
         %61 = OpLoad %6 %60
         %62 = OpIMul %6 %42 %61
               OpStore %40 %62
         %63 = OpLoad %6 %40
         %64 = OpIEqual %33 %63 %32
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %74
         %65 = OpLabel
               OpStore %70 %73
               OpBranch %66
         %74 = OpLabel
               OpStore %70 %75
               OpBranch %66
         %66 = OpLabel
               OpReturn
               OpFunctionEnd
