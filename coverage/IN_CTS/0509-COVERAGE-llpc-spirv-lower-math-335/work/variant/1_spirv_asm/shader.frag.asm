; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 81
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %62
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f0"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "f1"
               OpName %28 "f2"
               OpName %34 "f3"
               OpName %38 "buf2"
               OpMemberName %38 0 "one"
               OpName %40 ""
               OpName %50 "buf1"
               OpMemberName %50 0 "_GLF_uniform_int_values"
               OpName %52 ""
               OpName %62 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %38 0 Offset 0
               OpDecorate %38 Block
               OpDecorate %40 DescriptorSet 0
               OpDecorate %40 Binding 2
               OpDecorate %49 ArrayStride 16
               OpMemberDecorate %50 0 Offset 0
               OpDecorate %50 Block
               OpDecorate %52 DescriptorSet 0
               OpDecorate %52 Binding 1
               OpDecorate %62 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %21 = OpConstant %15 1
         %25 = OpConstant %6 4
         %38 = OpTypeStruct %6
         %39 = OpTypePointer Uniform %38
         %40 = OpVariable %39 Uniform
         %49 = OpTypeArray %15 %10
         %50 = OpTypeStruct %49
         %51 = OpTypePointer Uniform %50
         %52 = OpVariable %51 Uniform
         %53 = OpTypePointer Uniform %15
         %56 = OpTypeBool
         %60 = OpTypeVector %6 4
         %61 = OpTypePointer Output %60
         %62 = OpVariable %61 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %28 = OpVariable %7 Function
         %34 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %22 = OpAccessChain %17 %14 %16 %21
         %23 = OpLoad %6 %22
         %24 = OpLoad %6 %8
         %26 = OpExtInst %6 %1 Pow %24 %25
         %27 = OpFMul %6 %23 %26
               OpStore %20 %27
         %29 = OpAccessChain %17 %14 %16 %21
         %30 = OpLoad %6 %29
         %31 = OpLoad %6 %8
         %32 = OpExtInst %6 %1 Pow %31 %25
         %33 = OpFMul %6 %30 %32
               OpStore %28 %33
         %35 = OpLoad %6 %20
         %36 = OpLoad %6 %28
         %37 = OpFSub %6 %35 %36
         %41 = OpAccessChain %17 %40 %16
         %42 = OpLoad %6 %41
         %43 = OpFSub %6 %37 %42
         %44 = OpLoad %6 %8
         %45 = OpFAdd %6 %43 %44
         %46 = OpExtInst %6 %1 Sqrt %45
               OpStore %34 %46
         %47 = OpLoad %6 %34
         %48 = OpConvertFToS %15 %47
         %54 = OpAccessChain %53 %52 %16 %16
         %55 = OpLoad %15 %54
         %57 = OpIEqual %56 %48 %55
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %76
         %58 = OpLabel
         %63 = OpAccessChain %53 %52 %16 %16
         %64 = OpLoad %15 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpAccessChain %53 %52 %16 %21
         %67 = OpLoad %15 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpAccessChain %53 %52 %16 %21
         %70 = OpLoad %15 %69
         %71 = OpConvertSToF %6 %70
         %72 = OpAccessChain %53 %52 %16 %16
         %73 = OpLoad %15 %72
         %74 = OpConvertSToF %6 %73
         %75 = OpCompositeConstruct %60 %65 %68 %71 %74
               OpStore %62 %75
               OpBranch %59
         %76 = OpLabel
         %77 = OpAccessChain %53 %52 %16 %21
         %78 = OpLoad %15 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpCompositeConstruct %60 %79 %79 %79 %79
               OpStore %62 %80
               OpBranch %59
         %59 = OpLabel
               OpReturn
               OpFunctionEnd
