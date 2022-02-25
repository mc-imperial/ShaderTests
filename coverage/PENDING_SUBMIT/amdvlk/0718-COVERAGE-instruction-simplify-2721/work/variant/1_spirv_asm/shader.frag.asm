; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 59
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %34
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %19 "buf_push"
               OpMemberName %19 0 "two"
               OpName %21 ""
               OpName %34 "_GLF_color"
               OpName %37 "buf1"
               OpMemberName %37 0 "_GLF_uniform_int_values"
               OpName %39 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %34 Location 0
               OpDecorate %36 ArrayStride 16
               OpMemberDecorate %37 0 Offset 0
               OpDecorate %37 Block
               OpDecorate %39 DescriptorSet 0
               OpDecorate %39 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpConstant %6 1
          %8 = OpTypeFloat 32
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %8 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %8
         %19 = OpTypeStruct %8
         %20 = OpTypePointer PushConstant %19
         %21 = OpVariable %20 PushConstant
         %22 = OpTypePointer PushConstant %8
         %25 = OpTypeBool
         %32 = OpTypeVector %8 4
         %33 = OpTypePointer Output %32
         %34 = OpVariable %33 Output
         %35 = OpConstant %9 2
         %36 = OpTypeArray %6 %35
         %37 = OpTypeStruct %36
         %38 = OpTypePointer Uniform %37
         %39 = OpVariable %38 Uniform
         %40 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %17 = OpAccessChain %16 %14 %15 %15
         %18 = OpLoad %8 %17
         %23 = OpAccessChain %22 %21 %15
         %24 = OpLoad %8 %23
         %26 = OpFOrdGreaterThan %25 %18 %24
         %27 = OpSelect %6 %26 %7 %15
         %28 = OpExtInst %6 %1 SClamp %7 %27 %7
         %29 = OpSLessThanEqual %25 %28 %7
               OpSelectionMerge %31 None
               OpBranchConditional %29 %30 %54
         %30 = OpLabel
         %41 = OpAccessChain %40 %39 %15 %15
         %42 = OpLoad %6 %41
         %43 = OpConvertSToF %8 %42
         %44 = OpAccessChain %40 %39 %15 %7
         %45 = OpLoad %6 %44
         %46 = OpConvertSToF %8 %45
         %47 = OpAccessChain %40 %39 %15 %7
         %48 = OpLoad %6 %47
         %49 = OpConvertSToF %8 %48
         %50 = OpAccessChain %40 %39 %15 %15
         %51 = OpLoad %6 %50
         %52 = OpConvertSToF %8 %51
         %53 = OpCompositeConstruct %32 %43 %46 %49 %52
               OpStore %34 %53
               OpBranch %31
         %54 = OpLabel
         %55 = OpAccessChain %40 %39 %15 %7
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %8 %56
         %58 = OpCompositeConstruct %32 %57 %57 %57 %57
               OpStore %34 %58
               OpBranch %31
         %31 = OpLabel
               OpReturn
               OpFunctionEnd
