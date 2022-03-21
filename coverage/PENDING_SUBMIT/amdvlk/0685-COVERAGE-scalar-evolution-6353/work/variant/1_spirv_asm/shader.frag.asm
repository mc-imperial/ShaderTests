; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 105
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %86
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %21 "arr"
               OpName %51 "i"
               OpName %86 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %86 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 10
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %20 = OpTypePointer Function %11
         %24 = OpConstant %6 3
         %27 = OpConstant %6 2
         %30 = OpConstant %6 4
         %33 = OpConstant %6 5
         %36 = OpConstant %6 6
         %39 = OpConstant %6 7
         %42 = OpConstant %6 8
         %45 = OpConstant %6 9
         %62 = OpTypeBool
         %83 = OpTypeFloat 32
         %84 = OpTypeVector %83 4
         %85 = OpTypePointer Output %84
         %86 = OpVariable %85 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %21 = OpVariable %20 Function
         %51 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpAccessChain %17 %14 %15 %16
         %23 = OpLoad %6 %22
         %25 = OpAccessChain %17 %14 %15 %24
         %26 = OpLoad %6 %25
         %28 = OpAccessChain %17 %14 %15 %27
         %29 = OpLoad %6 %28
         %31 = OpAccessChain %17 %14 %15 %30
         %32 = OpLoad %6 %31
         %34 = OpAccessChain %17 %14 %15 %33
         %35 = OpLoad %6 %34
         %37 = OpAccessChain %17 %14 %15 %36
         %38 = OpLoad %6 %37
         %40 = OpAccessChain %17 %14 %15 %39
         %41 = OpLoad %6 %40
         %43 = OpAccessChain %17 %14 %15 %42
         %44 = OpLoad %6 %43
         %46 = OpAccessChain %17 %14 %15 %45
         %47 = OpLoad %6 %46
         %48 = OpAccessChain %17 %14 %15 %15
         %49 = OpLoad %6 %48
         %50 = OpCompositeConstruct %11 %23 %26 %29 %32 %35 %38 %41 %44 %47 %49
               OpStore %21 %50
         %52 = OpAccessChain %17 %14 %15 %16
         %53 = OpLoad %6 %52
               OpStore %51 %53
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %6 %51
         %60 = OpAccessChain %17 %14 %15 %15
         %61 = OpLoad %6 %60
         %63 = OpSLessThan %62 %59 %61
               OpBranchConditional %63 %55 %56
         %55 = OpLabel
         %64 = OpLoad %6 %8
         %65 = OpIAdd %6 %64 %16
               OpStore %8 %65
         %66 = OpAccessChain %17 %14 %15 %27
         %67 = OpLoad %6 %66
         %68 = OpLoad %6 %8
         %69 = OpAccessChain %7 %21 %68
         %70 = OpLoad %6 %69
         %71 = OpAccessChain %7 %21 %67
               OpStore %71 %70
               OpBranch %57
         %57 = OpLabel
         %72 = OpLoad %6 %51
         %73 = OpIAdd %6 %72 %16
               OpStore %51 %73
               OpBranch %54
         %56 = OpLabel
         %74 = OpAccessChain %17 %14 %15 %27
         %75 = OpLoad %6 %74
         %76 = OpAccessChain %7 %21 %75
         %77 = OpLoad %6 %76
         %78 = OpAccessChain %17 %14 %15 %15
         %79 = OpLoad %6 %78
         %80 = OpIEqual %62 %77 %79
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %100
         %81 = OpLabel
         %87 = OpAccessChain %17 %14 %15 %24
         %88 = OpLoad %6 %87
         %89 = OpConvertSToF %83 %88
         %90 = OpAccessChain %17 %14 %15 %16
         %91 = OpLoad %6 %90
         %92 = OpConvertSToF %83 %91
         %93 = OpAccessChain %17 %14 %15 %16
         %94 = OpLoad %6 %93
         %95 = OpConvertSToF %83 %94
         %96 = OpAccessChain %17 %14 %15 %24
         %97 = OpLoad %6 %96
         %98 = OpConvertSToF %83 %97
         %99 = OpCompositeConstruct %84 %89 %92 %95 %98
               OpStore %86 %99
               OpBranch %82
        %100 = OpLabel
        %101 = OpAccessChain %17 %14 %15 %16
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %83 %102
        %104 = OpCompositeConstruct %84 %103 %103 %103 %103
               OpStore %86 %104
               OpBranch %82
         %82 = OpLabel
               OpReturn
               OpFunctionEnd
