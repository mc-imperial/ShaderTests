; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 90
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %23
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %23 "_GLF_color"
               OpName %34 "buf1"
               OpMemberName %34 0 "five"
               OpName %36 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %23 Location 0
               OpMemberDecorate %34 0 Offset 0
               OpDecorate %34 Block
               OpDecorate %36 DescriptorSet 0
               OpDecorate %36 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeFloat 32
         %21 = OpTypeVector %20 4
         %22 = OpTypePointer Output %21
         %23 = OpVariable %22 Output
         %34 = OpTypeStruct %6
         %35 = OpTypePointer Uniform %34
         %36 = OpVariable %35 Uniform
         %39 = OpTypeBool
         %65 = OpConstant %6 20
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %17 %14 %15 %15
         %25 = OpLoad %6 %24
         %26 = OpConvertSToF %20 %25
         %27 = OpCompositeConstruct %21 %26 %26 %26 %26
               OpStore %23 %27
               OpBranch %28
         %28 = OpLabel
               OpLoopMerge %30 %31 None
               OpBranch %29
         %29 = OpLabel
         %32 = OpAccessChain %17 %14 %15 %16
         %33 = OpLoad %6 %32
         %37 = OpAccessChain %17 %36 %15
         %38 = OpLoad %6 %37
         %40 = OpSGreaterThanEqual %39 %33 %38
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %42
         %41 = OpLabel
               OpBranch %30
         %42 = OpLabel
         %44 = OpLoad %6 %8
         %45 = OpIAdd %6 %44 %16
               OpStore %8 %45
               OpBranch %31
         %31 = OpLabel
         %46 = OpAccessChain %17 %14 %15 %16
         %47 = OpLoad %6 %46
         %48 = OpAccessChain %17 %14 %15 %16
         %49 = OpLoad %6 %48
         %50 = OpSLessThan %39 %47 %49
               OpBranchConditional %50 %28 %30
         %30 = OpLabel
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %52
         %52 = OpLabel
         %55 = OpLoad %6 %8
         %56 = OpAccessChain %17 %36 %15
         %57 = OpLoad %6 %56
         %58 = OpSGreaterThanEqual %39 %55 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
               OpBranch %53
         %60 = OpLabel
         %62 = OpLoad %6 %8
         %63 = OpIAdd %6 %62 %16
               OpStore %8 %63
               OpBranch %54
         %54 = OpLabel
         %64 = OpLoad %6 %8
         %66 = OpSLessThan %39 %64 %65
               OpBranchConditional %66 %51 %53
         %53 = OpLabel
               OpBranch %67
         %67 = OpLabel
               OpLoopMerge %69 %70 None
               OpBranch %68
         %68 = OpLabel
         %71 = OpLoad %6 %8
         %72 = OpIAdd %6 %71 %16
               OpStore %8 %72
         %73 = OpAccessChain %17 %14 %15 %16
         %74 = OpLoad %6 %73
         %75 = OpConvertSToF %20 %74
         %76 = OpAccessChain %17 %14 %15 %15
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %20 %77
         %79 = OpAccessChain %17 %14 %15 %15
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %20 %80
         %82 = OpAccessChain %17 %14 %15 %16
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %20 %83
         %85 = OpCompositeConstruct %21 %75 %78 %81 %84
               OpStore %23 %85
               OpBranch %70
         %70 = OpLabel
         %86 = OpLoad %6 %8
         %87 = OpAccessChain %17 %14 %15 %16
         %88 = OpLoad %6 %87
         %89 = OpSLessThan %39 %86 %88
               OpBranchConditional %89 %67 %69
         %69 = OpLabel
               OpReturn
               OpFunctionEnd
