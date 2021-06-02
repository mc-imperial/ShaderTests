; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 113
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %94
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "S"
               OpMemberName %10 0 "numbers"
               OpName %12 "obj"
               OpName %15 "buf1"
               OpMemberName %15 0 "_GLF_uniform_float_values"
               OpName %17 ""
               OpName %33 "buf2"
               OpMemberName %33 0 "zeroVec"
               OpName %35 ""
               OpName %44 "a"
               OpName %59 "buf3"
               OpMemberName %59 0 "oneVec"
               OpName %61 ""
               OpName %67 "b"
               OpName %73 "buf0"
               OpMemberName %73 0 "_GLF_uniform_int_values"
               OpName %75 ""
               OpName %94 "_GLF_color"
               OpDecorate %14 ArrayStride 16
               OpMemberDecorate %15 0 Offset 0
               OpDecorate %15 Block
               OpDecorate %17 DescriptorSet 0
               OpDecorate %17 Binding 1
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 2
               OpMemberDecorate %59 0 Offset 0
               OpDecorate %59 Block
               OpDecorate %61 DescriptorSet 0
               OpDecorate %61 Binding 3
               OpDecorate %72 ArrayStride 16
               OpMemberDecorate %73 0 Offset 0
               OpDecorate %73 Block
               OpDecorate %75 DescriptorSet 0
               OpDecorate %75 Binding 0
               OpDecorate %94 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 3
          %9 = OpTypeArray %6 %8
         %10 = OpTypeStruct %9
         %11 = OpTypePointer Function %10
         %13 = OpConstant %7 5
         %14 = OpTypeArray %6 %13
         %15 = OpTypeStruct %14
         %16 = OpTypePointer Uniform %15
         %17 = OpVariable %16 Uniform
         %18 = OpTypeInt 32 1
         %19 = OpConstant %18 0
         %20 = OpConstant %18 3
         %21 = OpTypePointer Uniform %6
         %24 = OpConstant %18 2
         %27 = OpConstant %18 4
         %32 = OpTypeVector %6 2
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpConstant %7 0
         %42 = OpTypePointer Function %6
         %49 = OpTypeBool
         %51 = OpTypePointer Function %32
         %55 = OpTypePointer Uniform %32
         %59 = OpTypeStruct %32
         %60 = OpTypePointer Uniform %59
         %61 = OpVariable %60 Uniform
         %64 = OpConstant %7 1
         %71 = OpConstant %7 2
         %72 = OpTypeArray %18 %71
         %73 = OpTypeStruct %72
         %74 = OpTypePointer Uniform %73
         %75 = OpVariable %74 Uniform
         %76 = OpTypePointer Uniform %18
         %86 = OpConstant %18 1
         %92 = OpTypeVector %6 4
         %93 = OpTypePointer Output %92
         %94 = OpVariable %93 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %44 = OpVariable %42 Function
         %52 = OpVariable %51 Function
         %67 = OpVariable %42 Function
         %22 = OpAccessChain %21 %17 %19 %20
         %23 = OpLoad %6 %22
         %25 = OpAccessChain %21 %17 %19 %24
         %26 = OpLoad %6 %25
         %28 = OpAccessChain %21 %17 %19 %27
         %29 = OpLoad %6 %28
         %30 = OpCompositeConstruct %9 %23 %26 %29
         %31 = OpCompositeConstruct %10 %30
               OpStore %12 %31
         %37 = OpAccessChain %21 %35 %19 %36
         %38 = OpLoad %6 %37
         %39 = OpConvertFToS %18 %38
         %40 = OpAccessChain %21 %17 %19 %19
         %41 = OpLoad %6 %40
         %43 = OpAccessChain %42 %12 %19 %39
               OpStore %43 %41
         %45 = OpAccessChain %21 %35 %19 %36
         %46 = OpLoad %6 %45
         %47 = OpAccessChain %21 %17 %19 %19
         %48 = OpLoad %6 %47
         %50 = OpFOrdGreaterThan %49 %46 %48
               OpSelectionMerge %54 None
               OpBranchConditional %50 %53 %58
         %53 = OpLabel
         %56 = OpAccessChain %55 %35 %19
         %57 = OpLoad %32 %56
               OpStore %52 %57
               OpBranch %54
         %58 = OpLabel
         %62 = OpAccessChain %55 %61 %19
         %63 = OpLoad %32 %62
               OpStore %52 %63
               OpBranch %54
         %54 = OpLabel
         %65 = OpAccessChain %42 %52 %64
         %66 = OpLoad %6 %65
               OpStore %44 %66
         %68 = OpAccessChain %21 %17 %19 %19
         %69 = OpLoad %6 %68
         %70 = OpLoad %6 %44
         %77 = OpAccessChain %76 %75 %19 %19
         %78 = OpLoad %18 %77
         %79 = OpAccessChain %42 %12 %19 %78
         %80 = OpLoad %6 %79
         %81 = OpExtInst %6 %1 FMix %69 %70 %80
               OpStore %67 %81
         %82 = OpLoad %6 %67
         %83 = OpAccessChain %21 %17 %19 %24
         %84 = OpLoad %6 %83
         %85 = OpExtInst %6 %1 Distance %82 %84
         %87 = OpAccessChain %21 %17 %19 %86
         %88 = OpLoad %6 %87
         %89 = OpFOrdLessThan %49 %85 %88
               OpSelectionMerge %91 None
               OpBranchConditional %89 %90 %108
         %90 = OpLabel
         %95 = OpAccessChain %76 %75 %19 %19
         %96 = OpLoad %18 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpAccessChain %76 %75 %19 %86
         %99 = OpLoad %18 %98
        %100 = OpConvertSToF %6 %99
        %101 = OpAccessChain %76 %75 %19 %86
        %102 = OpLoad %18 %101
        %103 = OpConvertSToF %6 %102
        %104 = OpAccessChain %76 %75 %19 %19
        %105 = OpLoad %18 %104
        %106 = OpConvertSToF %6 %105
        %107 = OpCompositeConstruct %92 %97 %100 %103 %106
               OpStore %94 %107
               OpBranch %91
        %108 = OpLabel
        %109 = OpAccessChain %76 %75 %19 %86
        %110 = OpLoad %18 %109
        %111 = OpConvertSToF %6 %110
        %112 = OpCompositeConstruct %92 %111 %111 %111 %111
               OpStore %94 %112
               OpBranch %91
         %91 = OpLabel
               OpReturn
               OpFunctionEnd
