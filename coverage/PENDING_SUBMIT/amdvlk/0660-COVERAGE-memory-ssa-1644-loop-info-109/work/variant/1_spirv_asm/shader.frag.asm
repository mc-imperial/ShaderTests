; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 107
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %101
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %9 "buf1"
               OpMemberName %9 0 "zero"
               OpName %11 ""
               OpName %16 "b"
               OpName %20 "buf0"
               OpMemberName %20 0 "_GLF_uniform_int_values"
               OpName %22 ""
               OpName %41 "arr"
               OpName %63 "i"
               OpName %101 "_GLF_color"
               OpMemberDecorate %9 0 Offset 0
               OpDecorate %9 Block
               OpDecorate %11 DescriptorSet 0
               OpDecorate %11 Binding 1
               OpDecorate %19 ArrayStride 16
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %22 DescriptorSet 0
               OpDecorate %22 Binding 0
               OpDecorate %101 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeStruct %6
         %10 = OpTypePointer Uniform %9
         %11 = OpVariable %10 Uniform
         %12 = OpConstant %6 0
         %13 = OpTypePointer Uniform %6
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 2
         %19 = OpTypeArray %6 %18
         %20 = OpTypeStruct %19
         %21 = OpTypePointer Uniform %20
         %22 = OpVariable %21 Uniform
         %30 = OpConstant %6 1
         %33 = OpTypeBool
         %38 = OpConstant %17 10
         %39 = OpTypeArray %6 %38
         %40 = OpTypePointer Function %39
         %70 = OpConstant %6 5
         %94 = OpConstant %6 2
         %98 = OpTypeFloat 32
         %99 = OpTypeVector %98 4
        %100 = OpTypePointer Output %99
        %101 = OpVariable %100 Output
        %102 = OpConstant %98 1
        %103 = OpConstant %98 0
        %104 = OpConstantComposite %99 %102 %103 %103 %102
        %106 = OpConstantComposite %99 %103 %103 %103 %103
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %16 = OpVariable %7 Function
         %41 = OpVariable %40 Function
         %63 = OpVariable %7 Function
         %14 = OpAccessChain %13 %11 %12
         %15 = OpLoad %6 %14
               OpStore %8 %15
         %23 = OpAccessChain %13 %22 %12 %12
         %24 = OpLoad %6 %23
               OpStore %16 %24
               OpBranch %25
         %25 = OpLabel
               OpLoopMerge %27 %28 None
               OpBranch %26
         %26 = OpLabel
         %29 = OpLoad %6 %16
         %31 = OpAccessChain %13 %22 %12 %30
         %32 = OpLoad %6 %31
         %34 = OpSGreaterThan %33 %29 %32
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
               OpBranch %27
         %36 = OpLabel
         %42 = OpAccessChain %13 %22 %12 %12
         %43 = OpLoad %6 %42
         %44 = OpAccessChain %13 %22 %12 %12
         %45 = OpLoad %6 %44
         %46 = OpAccessChain %13 %22 %12 %12
         %47 = OpLoad %6 %46
         %48 = OpAccessChain %13 %22 %12 %12
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %13 %22 %12 %12
         %51 = OpLoad %6 %50
         %52 = OpAccessChain %13 %22 %12 %12
         %53 = OpLoad %6 %52
         %54 = OpAccessChain %13 %22 %12 %12
         %55 = OpLoad %6 %54
         %56 = OpAccessChain %13 %22 %12 %12
         %57 = OpLoad %6 %56
         %58 = OpAccessChain %13 %22 %12 %12
         %59 = OpLoad %6 %58
         %60 = OpAccessChain %13 %22 %12 %12
         %61 = OpLoad %6 %60
         %62 = OpCompositeConstruct %39 %43 %45 %47 %49 %51 %53 %55 %57 %59 %61
               OpStore %41 %62
               OpStore %63 %12
               OpBranch %64
         %64 = OpLabel
               OpLoopMerge %66 %67 None
               OpBranch %68
         %68 = OpLabel
         %69 = OpLoad %6 %63
         %71 = OpSLessThan %33 %69 %70
               OpBranchConditional %71 %65 %66
         %65 = OpLabel
         %72 = OpLoad %6 %63
         %73 = OpLoad %6 %63
         %74 = OpISub %6 %73 %30
         %75 = OpAccessChain %7 %41 %74
         %76 = OpLoad %6 %75
         %77 = OpAccessChain %7 %41 %72
         %78 = OpLoad %6 %77
         %79 = OpIAdd %6 %78 %76
         %80 = OpAccessChain %7 %41 %72
               OpStore %80 %79
               OpBranch %67
         %67 = OpLabel
         %81 = OpLoad %6 %63
         %82 = OpIAdd %6 %81 %30
               OpStore %63 %82
               OpBranch %64
         %66 = OpLabel
         %83 = OpLoad %6 %16
         %84 = OpIAdd %6 %83 %30
               OpStore %16 %84
         %85 = OpAccessChain %7 %41 %70
         %86 = OpLoad %6 %85
         %87 = OpLoad %6 %8
         %88 = OpIAdd %6 %87 %86
               OpStore %8 %88
               OpBranch %28
         %28 = OpLabel
         %89 = OpLoad %6 %8
         %90 = OpAccessChain %13 %22 %12 %12
         %91 = OpLoad %6 %90
         %92 = OpINotEqual %33 %89 %91
               OpBranchConditional %92 %25 %27
         %27 = OpLabel
         %93 = OpLoad %6 %16
         %95 = OpIEqual %33 %93 %94
               OpSelectionMerge %97 None
               OpBranchConditional %95 %96 %105
         %96 = OpLabel
               OpStore %101 %104
               OpBranch %97
        %105 = OpLabel
               OpStore %101 %106
               OpBranch %97
         %97 = OpLabel
               OpReturn
               OpFunctionEnd
