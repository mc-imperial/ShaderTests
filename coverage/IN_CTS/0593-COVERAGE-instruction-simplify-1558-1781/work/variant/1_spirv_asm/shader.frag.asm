; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 73
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %53
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "buf0"
               OpMemberName %13 0 "_GLF_uniform_int_values"
               OpName %15 ""
               OpName %53 "_GLF_color"
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 0
               OpDecorate %53 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 3
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %6 0
         %17 = OpTypePointer Uniform %6
         %28 = OpTypeBool
         %50 = OpTypeFloat 32
         %51 = OpTypeVector %50 4
         %52 = OpTypePointer Output %51
         %53 = OpVariable %52 Output
         %57 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
               OpStore %8 %9
         %18 = OpAccessChain %17 %15 %16 %9
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %8
         %26 = OpAccessChain %17 %15 %16 %16
         %27 = OpLoad %6 %26
         %29 = OpSLessThan %28 %25 %27
               OpBranchConditional %29 %21 %22
         %21 = OpLabel
         %30 = OpLoad %6 %8
         %31 = OpSGreaterThan %28 %30 %16
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %34
         %32 = OpLabel
               OpBranch %33
         %34 = OpLabel
         %35 = OpLoad %6 %8
               OpSelectionMerge %38 None
               OpSwitch %35 %38 -1 %36 0 %37
         %36 = OpLabel
               OpBranch %38
         %37 = OpLabel
               OpReturn
         %38 = OpLabel
               OpBranch %33
         %33 = OpLabel
               OpBranch %23
         %23 = OpLabel
         %42 = OpLoad %6 %8
         %43 = OpIAdd %6 %42 %9
               OpStore %8 %43
               OpBranch %20
         %22 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpAccessChain %17 %15 %16 %16
         %46 = OpLoad %6 %45
         %47 = OpIEqual %28 %44 %46
               OpSelectionMerge %49 None
               OpBranchConditional %47 %48 %68
         %48 = OpLabel
         %54 = OpAccessChain %17 %15 %16 %9
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %50 %55
         %58 = OpAccessChain %17 %15 %16 %57
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %50 %59
         %61 = OpAccessChain %17 %15 %16 %57
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %50 %62
         %64 = OpAccessChain %17 %15 %16 %9
         %65 = OpLoad %6 %64
         %66 = OpConvertSToF %50 %65
         %67 = OpCompositeConstruct %51 %56 %60 %63 %66
               OpStore %53 %67
               OpBranch %49
         %68 = OpLabel
         %69 = OpAccessChain %17 %15 %16 %57
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %50 %70
         %72 = OpCompositeConstruct %51 %71 %71 %71 %71
               OpStore %53 %72
               OpBranch %49
         %49 = OpLabel
               OpReturn
               OpFunctionEnd
